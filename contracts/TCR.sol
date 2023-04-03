//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "../interfaces/IMoonpageCollection.sol";
import "../interfaces/IMoonpageManager.sol";

contract TCR is
    Initializable,
    PausableUpgradeable,
    AccessControlUpgradeable,
    UUPSUpgradeable
{
    bytes32 public constant CREATOR_ROLE = keccak256("CREATOR_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");
    IMoonpageCollection public moonpageCollection;
    IMoonpageManager public moonpageManager;
    uint256 projectId;
    uint256 characterIndex;
    uint256 index;

    struct Snippet {
        address writer;
        string textIPFSHash;
        uint256 writtenAt;
        bool written;
        uint256 character;
    }

    struct Character {
        string name;
        string textIPFSHash;
    }

    mapping(uint256 => Snippet) public snippets;
    mapping(uint256 => Character) public characters;
    mapping(address => bool) public admins;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(
        address _collection,
        address _manager,
        uint256 _projectId
    ) public initializer {
        __Pausable_init();
        __AccessControl_init();
        __UUPSUpgradeable_init();
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
        _grantRole(UPGRADER_ROLE, msg.sender);
        moonpageCollection = IMoonpageCollection(_collection);
        moonpageManager = IMoonpageManager(_manager);
        projectId = _projectId;
        characterIndex = 1;
        index = 1;
    }

    function characterOfToken(
        uint256 _tokenId
    ) external pure returns (uint256) {
        return _tokenId % 10;
    }

    function configureAdmins(
        address[] memory _addresses,
        bool[] memory _bools
    ) external whenNotPaused {
        require(
            _addresses.length == _bools.length,
            "Addresses and bools must be same length"
        );
        bool isAuthorized = hasRole(DEFAULT_ADMIN_ROLE, msg.sender);
        require(isAuthorized, "Not authorized");
        for (uint256 i = 0; i < _addresses.length; i++) {
            admins[_addresses[i]] = true;
        }
    }

    function setupCharacter(
        string memory _name,
        string memory _textIPFSHash
    ) external whenNotPaused {
        require(characterIndex < 10, "All 10 characters already set");
        require(admins[msg.sender], "Only for admins");
        characters[characterIndex].name = _name;
        characters[characterIndex].textIPFSHash = _textIPFSHash;
        characterIndex++;
    }

    function write(
        string memory _textIPFSHash,
        uint256 _tokenId
    ) external whenNotPaused {
        (
            ,
            ,
            uint256 startTokenId,
            uint256 currentTokenId,
            ,
            ,

        ) = moonpageManager.readEditionData(projectId);

        require(
            _tokenId >= startTokenId && _tokenId <= currentTokenId,
            "Not a TheClassroom NFT"
        );
        require(
            moonpageCollection.ownerOf(_tokenId) == msg.sender,
            "Not authorized"
        );
        require(snippets[_tokenId].written == false, "NFT already used");
        uint256 character = this.characterOfToken(_tokenId);
        snippets[_tokenId].writer = msg.sender;
        snippets[_tokenId].textIPFSHash = _textIPFSHash;
        snippets[_tokenId].writtenAt = block.timestamp;
        snippets[_tokenId].written = true;
        snippets[_tokenId].character = character;
        index++;
    }

    // ------------------
    // Explicit overrides
    // ------------------

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyRole(UPGRADER_ROLE) {}
}

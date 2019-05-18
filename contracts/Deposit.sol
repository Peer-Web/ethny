pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;


/**
 * @title Deposit
 * @notice TODO
 */
contract Deposit {
  /**
   * @notice TODO 
   */

  struct Range {
    uint256 start;
    uint256 end;
  }

  struct StateObject {
    address predicateAddress;
    bytes data;
  }

  struct StateUpdate {
    Range range;
    StateObject stateObject;
    address plasmaContract;
    uint256 plasmaBlockNumber;
  }

  struct Checkpoint {
    StateUpdate stateUpdate;
    Range chekcpointedRange;
  }

  struct CheckpointStatus {
    uint256 challengeableUntil;
    uint256 outstandingChallenges;
  }

  struct Challenge {
    Checkpoint challengedCheckpoint;
    Checkpoint challengingCheckpoint;
  }

  /*** Public Constants ***/
  // TODO - Set defaults
  address public constant COMMITMENT_ADDRESS = 0x99EF1a332003a2c93a9f228fd7966CECDE344bcC;
  address public constant TOKEN_ADDRESS = 0xF6c105ED2f0f5Ffe66501a4EEdaD86E10df19054;
  uint256 public constant CHALLENGE_PERIOD = 0;
  uint256 public constant EXIT_PERIOD = 0;

  /*** Public ***/
  uint256 public totalDeposited;
  mapping (bytes32 => CheckpointStatus) public checkpoints;
  mapping (bytes32 => StateUpdate) public limboCheckpointOrigins;
  mapping (uint256 => Range) public exitableRanges;
  mapping (bytes32 => uint256) public exitsRedeemableAfter;
  mapping (bytes32 => bool) public challengeStatuses;

  event CheckpointStarted(
    bytes32 checkpoint,
    uint256 challengePeriodStart
  );

  event CheckpointChallenged(
    bytes32 checkpoint,
    bytes32 challenge
  );

  event CheckpointFinalized(
    bytes32 checkpoint
  );

  event ExitStarted(
    bytes32 exit,
    uint256 exitPeriodStart
  );

  event ExitFinalized(
    bytes32 exit
  );

    /**
   * @notice 
   * @param _amount TODO
   * @param _initialState  TODO
   */
  function deposit(uint256 _amount, StateObject memory _initialState) public {
    // TODO
  }

  function startCheckpoint(StateUpdate memory _stateUpdate, bytes memory _inclusionProof, Range memory _checkpointedRange) public {
    // TODO 
  }

  function startLimboCheckpoint(
    StateUpdate memory _stateUpdate, 
    bytes memory _inclusionProof, 
    bytes memory _transaction,
    Range memory _checkpointedRange
  ) private 
  {
    // TODO 
  }

  function challengeCheckpointOutdated(bytes32 _olderCheckpoint, bytes32 _newerCheckpoint) private {
    // TODO 
  }

  function challengeCheckpointInvalid(Challenge memory _challenge) private {
    // TODO
  }

  function challengeLimboCheckpointAlternateTransaction(
    bytes32 _limboCheckpoint,
    bytes memory _alternateTransaction,
    bytes memory _inclusionProof
  ) private 
  {
    // TODO
  }

  function removeChallengeCheckpointInvalidHistory(bytes32 _challenge) private {
    // TODO 
  }

  function startExit(bytes32 _checkpoint, bytes memory _witness) private {
    // TODO
  }

  function challengeExitDeprecated(bytes32 _checkpoint, bytes memory _transaction, bytes memory _inclusionProof) private {
    // TODO
  }

  function finalizeExit(bytes32 _exit) private {
    // TODO
  }
  
}
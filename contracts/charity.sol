// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Donation {

    struct DonationList { 
        address _addr;
        uint256 _amount;
    }

    struct FundRequest {
        address _addr;
        string  _reason;
        uint256 _value;
        uint256 _total_approval;
        bool _status;
    }

    address public _owner ;

    mapping(uint256 => DonationList) public donationList;
    mapping(address => uint256) public totalDonation;
    mapping(address => bool) public daoList;
    mapping(uint256 => FundRequest) public fundRequest;
    mapping(uint256 => mapping(address => bool)) public fundApprovalList;
    mapping(uint256 => uint256) public fundApprovalCount;

    uint256 public _total_donation;
    uint256 public _total_released;
    uint256 public _total_count;
    uint256 public _fund_id;
    uint256 public _total_dao;

    uint256 public DAO_FEE = 100000000000000; //For testing set 0.0001

    constructor() {
        _owner = msg.sender;
    }

    event newdonate(address indexed _addr, uint256 _value);
    event newdao(address indexed _addr , uint256 _value);
    event newRequest(uint256 indexed _id , string _reason ,uint256 _value );

    function donate() public payable {

        require(msg.value > 0 , "Enough balance");

        internal_donation(msg.sender,msg.value);

        emit newdonate(msg.sender,msg.value);
    }

    function becomeDAO() public payable {

        require(daoList[msg.sender] == false ,"Active DAO");
        
        require(msg.value == DAO_FEE,"DAO ACTIVATION FEE");

        daoList[msg.sender] = true;

        internal_donation(msg.sender,msg.value);

        _total_dao++;

        emit newdao(msg.sender,msg.value);
        
    }

    function requestFund(uint256 _value , string memory _reason ) public {

        _fund_id++;

        fundRequest[_fund_id]._addr = msg.sender;
        fundRequest[_fund_id]._reason = _reason;
        fundRequest[_fund_id]._value = _value; 
        fundRequest[_fund_id]._status = false;

        emit newRequest(_fund_id , _reason , _value);
    }

    function approveFund(uint256 _id) public {

        require(isDAO(msg.sender) == true ,"Only DAO Allowed");
        require(fundApprovalList[_id][msg.sender] == false , " Duplicate Approval");
        require(fundRequest[_id]._status == false , " Fund Released Already");
        
        fundRequest[_id]._total_approval++;
        fundApprovalList[_id][msg.sender] = true;
        fundApprovalCount[_id]++;

    }

    function releaseFund(uint256 _id) onlyOwner public {

        require(fundRequest[_id]._status == false , " Fund Released Already");

        require(fundApprovalCount[_id] == _total_dao ,"100 % DAO Approval Required");

        address payable _receiver = payable(fundRequest[_id]._addr);

        fundRequest[_id]._status = true;

        _total_released = _total_released+fundRequest[_id]._value;

        require(_receiver.send(fundRequest[_id]._value),"No Balance");

    }
 
    function internal_donation (address _addr , uint256 _value ) private {
        
        _total_count++;

        donationList[_total_count]._addr = _addr;
        donationList[_total_count]._amount = _value;

        _total_donation = _total_donation + _value;

        totalDonation[_addr] = totalDonation[_addr] + _value;

    }

    function total() public view returns(uint256){
        return _total_donation;
    }

    function isDAO(address _addr) public view returns(bool) {
        return daoList[_addr];
    }

    function owner() public view returns (address) {
        return _owner;
    }

    modifier onlyOwner() {
        require(owner() == msg.sender, "Ownable: caller is not the owner");
        _;
    }

    // The receive function
    receive() external payable {
       
    }
}
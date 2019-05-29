using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ESignature.Modules.Default
{
    public class WEBAPIPoco
    {

    }
    public class RequestCheckOtp
    {
        public Token token { get; set; }
        public long mobileNo { get; set; }
        public string empId { get; set; }
    }

    public class LongRunCls
    {
        public string id { get; set; }
    }
    public class VerifyOtp
    {
        public Token token { get; set; }
        public string mobileNo { get; set; }
        public string empId { get; set; }
        public string imeiNo { get; set; }
        public string otp { get; set; }
    }

    public class getUpdatedDetails
    {
        public string empId { get; set; }
    }

    public class Signal
    {
        public string Message { get; set; }
    }
    public class CardValidityRequest
    {
        public string empId { get; set; }
        public string imeiNo { get; set; }
    }

    public class CardValidityResponse
    {
        public string errorCode { get; set; }
        public string message { get; set; }
        public CardValidity data { get; set; }
    }

    public class UpdateDetailRequest
    {
        public string empId { get; set; }
    }

    public class AccessPointRequest
    {
        public string empId { get; set; }
        public string orgId { get; set; }
    }
    public class AccessPointResponse
    {
        public string errorCode { get; set; }
        public string message { get; set; }
        public List<AccessPoint> data { get; set; }
    }

    public class AccessPoints
    {
        public string rederId { get; set; }
        public string readerName { get; set; }
    }    
    public class UpdateDetailsResponse
    {
        public string errorCode { get; set; }
        public string message { get; set; }
        public CardData data { get; set; }

    }

    public class CardData
    {
        public string encryptedData { get; set; }
    }

    public class CardValidity
    {
        public bool isCardExpired { get; set; }
        public string Info { get; set; }
    }
    public class checkCardValidity
    {
        public Token token { get; set; }
        public string empId { get; set; }
        public string imeiNo { get; set; }
    }   

    public class Response
    {
        public string errorCode { get; set; }
        public string Message { get; set; }
        public EmployeeResponse data { get; set; }
        public AccessPointResponse readers { get; set; }
    }
    
    public class OrgOut
    {
        public string AccessPointName { get; set; }
        public string AccessPointCode { get; set; }
        public string IPAddress { get; set; }
        public string UDPPort { get; set; }
        public string TCPPort { get; set; }
        public Int32? Slave { get; set; }
        public string OrganizationCode { get; set; }
        public string ReaderCode { get; set; }
        public string OrgName { get; set; }
    }
    public class OrgResponse
    {
        public string errorCode { get; set; }
        public string Message { get; set; }
        public List<OrgOut> data { get; set; }
    }

    public class OrgLoginRequest
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        
    }

    public class SendDeviceTransaction
    {
        public Token token { get; set; }
        public string empId { get; set; }
        public string activityDateTime { get; set; }
        public string imeiNo { get; set; }
        public string mobileNo { get; set; }
        public string orgId { get; set; }
        public string rawString { get; set; }
        public string info { get; set; }
        public string info2 { get; set; }
    }
    public class TransactionResponse
    {
        
        public string message { get; set; }
        public string errorCode { get; set; } 
    }

    public class AllowedAccessPoints
    {
        public string EmployeeID { get; set; }
        public List<AccessPoint> AccessPointsName { get; set; }
    }

    public class AccessPoint
    {
        public string readerId { get; set; }
        public string readerName { get; set; }
    }
    public class EmployeeResponse
    {
        public string empName { get; set; }
        public string empId { get; set; }
        public string mobileNo { get; set; }
        public string cardNo { get; set; }
        public string orgId { get; set; }
        public string orgName { get; set; }
        public string encryptedData { get; set; }
        public string expiryDate { get; set; }
        public string expiryTime { get; set; }        
    }
    public class Token
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
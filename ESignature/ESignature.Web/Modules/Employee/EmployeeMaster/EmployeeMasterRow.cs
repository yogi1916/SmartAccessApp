
namespace ESignature.Employee.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Test"), TableName("[dbo].[EmployeeMaster]")]
    [DisplayName("Employee Master"), InstanceName("Employee Master")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class EmployeeMasterRow : Row, IIdRow, INameRow
    {
        [DisplayName("Employee Master Id"), Column("EmployeeMasterID"), Identity]
        public Int32? EmployeeMasterId
        {
            get { return Fields.EmployeeMasterId[this]; }
            set { Fields.EmployeeMasterId[this] = value; }
        }

        [DisplayName("Employee Code"), Size(100), NotNull, QuickSearch]
        public String EmployeeCode
        {
            get { return Fields.EmployeeCode[this]; }
            set { Fields.EmployeeCode[this] = value; }
        }

        [DisplayName("Salutation"), Column("SalutationID"), NotNull, ForeignKey("[dbo].[Salutation]", "SalutationID"), LeftJoin("jSalutation"), TextualField("SalutationSalutationName")]
        public Int32? SalutationId
        {
            get { return Fields.SalutationId[this]; }
            set { Fields.SalutationId[this] = value; }
        }

        [DisplayName("Department"), Column("DepartmentID"), NotNull, ForeignKey("[dbo].[Departments]", "DepartmentID"), LeftJoin("jDepartment"), TextualField("DepartmentDepartmentName")]
        public Int32? DepartmentId
        {
            get { return Fields.DepartmentId[this]; }
            set { Fields.DepartmentId[this] = value; }
        }

        [DisplayName("Company Location"), Column("CompanyLocationID"), NotNull, ForeignKey("[dbo].[CompanyLocations]", "CompanyLocationID"), LeftJoin("jCompanyLocation")]
        public Int32? CompanyLocationId
        {
            get { return Fields.CompanyLocationId[this]; }
            set { Fields.CompanyLocationId[this] = value; }
        }

        [DisplayName("Designation"), Column("DesignationID"), NotNull, ForeignKey("[dbo].[Designations]", "DesignationID"), LeftJoin("jDesignation"), TextualField("DesignationDesignationName")]
        public Int32? DesignationId
        {
            get { return Fields.DesignationId[this]; }
            set { Fields.DesignationId[this] = value; }
        }

        [DisplayName("Gender"), Column("GenderID"), NotNull, ForeignKey("[dbo].[Gender]", "GenderID"), LeftJoin("jGender"), TextualField("GenderGenderName")]
        public Int32? GenderId
        {
            get { return Fields.GenderId[this]; }
            set { Fields.GenderId[this] = value; }
        }

        [DisplayName("Division"), Column("DivisionID"), NotNull, ForeignKey("[dbo].[DivisionMaster]", "DivisionID"), LeftJoin("jDivision"), TextualField("DivisionDivisionName")]
        public Int32? DivisionId
        {
            get { return Fields.DivisionId[this]; }
            set { Fields.DivisionId[this] = value; }
        }

        [DisplayName("Sub Department"), Column("SubDepartmentID"), NotNull, ForeignKey("[dbo].[SubDepartments]", "SubDepartmentID"), LeftJoin("jSubDepartment"), TextualField("SubDepartmentSubDepartmentName")]
        public Int32? SubDepartmentId
        {
            get { return Fields.SubDepartmentId[this]; }
            set { Fields.SubDepartmentId[this] = value; }
        }

        [DisplayName("Maretial Status"), Column("MaretialStatusID"), NotNull, ForeignKey("[dbo].[MaretialStatus]", "MaretialStatusID"), LeftJoin("jMaretialStatus"), TextualField("MaretialStatusMaretialStatusName")]
        public Int32? MaretialStatusId
        {
            get { return Fields.MaretialStatusId[this]; }
            set { Fields.MaretialStatusId[this] = value; }
        }

        [DisplayName("Employee Type"), Column("EmployeeTypeID"), NotNull, ForeignKey("[dbo].[EmployeeType]", "EmployeeTypeID"), LeftJoin("jEmployeeType"), TextualField("EmployeeTypeEmployeeTypeName")]
        public Int32? EmployeeTypeId
        {
            get { return Fields.EmployeeTypeId[this]; }
            set { Fields.EmployeeTypeId[this] = value; }
        }

        [DisplayName("Employment Type"), Column("EmploymentTypeID"), NotNull, ForeignKey("[dbo].[EmploymentTypes]", "EmploymentTypeID"), LeftJoin("jEmploymentType"), TextualField("EmploymentType")]
        public Int32? EmploymentTypeId
        {
            get { return Fields.EmploymentTypeId[this]; }
            set { Fields.EmploymentTypeId[this] = value; }
        }

        [DisplayName("Blood Group"), Column("BloodGroupID"), NotNull, ForeignKey("[dbo].[BloodGroups]", "BloodGroupID"), LeftJoin("jBloodGroup"), TextualField("BloodGroup")]
        public Int32? BloodGroupId
        {
            get { return Fields.BloodGroupId[this]; }
            set { Fields.BloodGroupId[this] = value; }
        }

        [DisplayName("Company Master"), Column("CompanyMasterID"), ForeignKey("[dbo].[CompanyMaster]", "CompanyMasterID"), LeftJoin("jCompanyMaster"), TextualField("CompanyMasterCompanyName")]
        public Int32? CompanyMasterId
        {
            get { return Fields.CompanyMasterId[this]; }
            set { Fields.CompanyMasterId[this] = value; }
        }

        [DisplayName("First Name"), Size(100), NotNull]
        public String FirstName
        {
            get { return Fields.FirstName[this]; }
            set { Fields.FirstName[this] = value; }
        }

        [DisplayName("Middle Name"), Size(100)]
        public String MiddleName
        {
            get { return Fields.MiddleName[this]; }
            set { Fields.MiddleName[this] = value; }
        }

        [DisplayName("Last Name"), Size(100)]
        public String LastName
        {
            get { return Fields.LastName[this]; }
            set { Fields.LastName[this] = value; }
        }

        [DisplayName("Mobile Number"), Size(25)]
        public String MobileNumber
        {
            get { return Fields.MobileNumber[this]; }
            set { Fields.MobileNumber[this] = value; }
        }

        [DisplayName("City"), Size(50)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("State"), Size(50)]
        public String State
        {
            get { return Fields.State[this]; }
            set { Fields.State[this] = value; }
        }

        [DisplayName("Country"), Size(50)]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Address")]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Dateof Birth")]
        public DateTime? DateofBirth
        {
            get { return Fields.DateofBirth[this]; }
            set { Fields.DateofBirth[this] = value; }
        }

        [DisplayName("Date Of Joining"), NotNull]
        public DateTime? DateOfJoining
        {
            get { return Fields.DateOfJoining[this]; }
            set { Fields.DateOfJoining[this] = value; }
        }

        [DisplayName("Resign Date")]
        public DateTime? ResignDate
        {
            get { return Fields.ResignDate[this]; }
            set { Fields.ResignDate[this] = value; }
        }

        [DisplayName("Email Address"), Size(50)]
        public String EmailAddress
        {
            get { return Fields.EmailAddress[this]; }
            set { Fields.EmailAddress[this] = value; }
        }

        [DisplayName("Email"), Size(50)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Manager Id"), Column("ManagerID")]
        public Int32? ManagerId
        {
            get { return Fields.ManagerId[this]; }
            set { Fields.ManagerId[this] = value; }
        }

        [DisplayName("Aadhar Card No"), Size(50)]
        public String AadharCardNo
        {
            get { return Fields.AadharCardNo[this]; }
            set { Fields.AadharCardNo[this] = value; }
        }
        [DisplayName("Card No"), Size(50),NotMapped]
        public String CardNo
        {
            get { return Fields.CardNo[this]; }
            set { Fields.CardNo[this] = value; }
        }
        [DisplayName("Is Expiry Allowed"), NotNull]
        public Boolean? IsExpiryAllowed
        {
            get { return Fields.IsExpiryAllowed[this]; }
            set { Fields.IsExpiryAllowed[this] = value; }
        }

        [DisplayName("Card Expiry")]
        public DateTime? CardExpiry
        {
            get { return Fields.CardExpiry[this]; }
            set { Fields.CardExpiry[this] = value; }
        }

        [DisplayName("Photo Path"), Size(1000)]
        public String PhotoPath
        {
            get { return Fields.PhotoPath[this]; }
            set { Fields.PhotoPath[this] = value; }
        }

        [DisplayName("Mark Deleted"), NotNull]
        public Boolean? MarkDeleted
        {
            get { return Fields.MarkDeleted[this]; }
            set { Fields.MarkDeleted[this] = value; }
        }

        [DisplayName("Extra1"), Size(1000)]
        public String Extra1
        {
            get { return Fields.Extra1[this]; }
            set { Fields.Extra1[this] = value; }
        }

        [DisplayName("Extra2"), Size(1000)]
        public String Extra2
        {
            get { return Fields.Extra2[this]; }
            set { Fields.Extra2[this] = value; }
        }

        [DisplayName("Extra3"), Size(1000)]
        public String Extra3
        {
            get { return Fields.Extra3[this]; }
            set { Fields.Extra3[this] = value; }
        }

        [DisplayName("Extra4"), Size(1000)]
        public String Extra4
        {
            get { return Fields.Extra4[this]; }
            set { Fields.Extra4[this] = value; }
        }

        [DisplayName("Extra5"), Size(1000)]
        public String Extra5
        {
            get { return Fields.Extra5[this]; }
            set { Fields.Extra5[this] = value; }
        }

        [DisplayName("Is Employee Login"), NotNull]
        public Boolean? IsEmployeeLogin
        {
            get { return Fields.IsEmployeeLogin[this]; }
            set { Fields.IsEmployeeLogin[this] = value; }
        }

        [DisplayName("Salutation Salutation Name"), Expression("jSalutation.[SalutationName]")]
        public String SalutationSalutationName
        {
            get { return Fields.SalutationSalutationName[this]; }
            set { Fields.SalutationSalutationName[this] = value; }
        }

        [DisplayName("Department Department Name"), Expression("jDepartment.[DepartmentName]")]
        public String DepartmentDepartmentName
        {
            get { return Fields.DepartmentDepartmentName[this]; }
            set { Fields.DepartmentDepartmentName[this] = value; }
        }

        [DisplayName("Department Department Code"), Expression("jDepartment.[DepartmentCode]")]
        public String DepartmentDepartmentCode
        {
            get { return Fields.DepartmentDepartmentCode[this]; }
            set { Fields.DepartmentDepartmentCode[this] = value; }
        }

        [DisplayName("Department Company Location Id"), Expression("jDepartment.[CompanyLocationID]")]
        public Int32? DepartmentCompanyLocationId
        {
            get { return Fields.DepartmentCompanyLocationId[this]; }
            set { Fields.DepartmentCompanyLocationId[this] = value; }
        }

        [DisplayName("Department Division Id"), Expression("jDepartment.[DivisionID]")]
        public Int32? DepartmentDivisionId
        {
            get { return Fields.DepartmentDivisionId[this]; }
            set { Fields.DepartmentDivisionId[this] = value; }
        }

        [DisplayName("Department Details"), Expression("jDepartment.[Details]")]
        public String DepartmentDetails
        {
            get { return Fields.DepartmentDetails[this]; }
            set { Fields.DepartmentDetails[this] = value; }
        }

        [DisplayName("Department Created Date Time"), Expression("jDepartment.[CreatedDateTime]")]
        public DateTime? DepartmentCreatedDateTime
        {
            get { return Fields.DepartmentCreatedDateTime[this]; }
            set { Fields.DepartmentCreatedDateTime[this] = value; }
        }

        [DisplayName("Department Mark Deleted"), Expression("jDepartment.[MarkDeleted]")]
        public Boolean? DepartmentMarkDeleted
        {
            get { return Fields.DepartmentMarkDeleted[this]; }
            set { Fields.DepartmentMarkDeleted[this] = value; }
        }

        [DisplayName("Company Location Company Master Id"), Expression("jCompanyLocation.[CompanyMasterID]")]
        public Int32? CompanyLocationCompanyMasterId
        {
            get { return Fields.CompanyLocationCompanyMasterId[this]; }
            set { Fields.CompanyLocationCompanyMasterId[this] = value; }
        }

        [DisplayName("Company Location Location Master Id"), Expression("jCompanyLocation.[LocationMasterID]")]
        public Int32? CompanyLocationLocationMasterId
        {
            get { return Fields.CompanyLocationLocationMasterId[this]; }
            set { Fields.CompanyLocationLocationMasterId[this] = value; }
        }

        [DisplayName("Company Location Created Date Time"), Expression("jCompanyLocation.[CreatedDateTime]")]
        public DateTime? CompanyLocationCreatedDateTime
        {
            get { return Fields.CompanyLocationCreatedDateTime[this]; }
            set { Fields.CompanyLocationCreatedDateTime[this] = value; }
        }

        [DisplayName("Company Location Mark Deleted"), Expression("jCompanyLocation.[MarkDeleted]")]
        public Boolean? CompanyLocationMarkDeleted
        {
            get { return Fields.CompanyLocationMarkDeleted[this]; }
            set { Fields.CompanyLocationMarkDeleted[this] = value; }
        }

        [DisplayName("Designation Designation Name"), Expression("jDesignation.[DesignationName]")]
        public String DesignationDesignationName
        {
            get { return Fields.DesignationDesignationName[this]; }
            set { Fields.DesignationDesignationName[this] = value; }
        }

        [DisplayName("Designation Designation Code"), Expression("jDesignation.[DesignationCode]")]
        public String DesignationDesignationCode
        {
            get { return Fields.DesignationDesignationCode[this]; }
            set { Fields.DesignationDesignationCode[this] = value; }
        }

        [DisplayName("Designation Company Master Id"), Expression("jDesignation.[CompanyMasterID]")]
        public Int32? DesignationCompanyMasterId
        {
            get { return Fields.DesignationCompanyMasterId[this]; }
            set { Fields.DesignationCompanyMasterId[this] = value; }
        }

        [DisplayName("Designation Details"), Expression("jDesignation.[Details]")]
        public String DesignationDetails
        {
            get { return Fields.DesignationDetails[this]; }
            set { Fields.DesignationDetails[this] = value; }
        }

        [DisplayName("Designation Created Date Time"), Expression("jDesignation.[CreatedDateTime]")]
        public DateTime? DesignationCreatedDateTime
        {
            get { return Fields.DesignationCreatedDateTime[this]; }
            set { Fields.DesignationCreatedDateTime[this] = value; }
        }

        [DisplayName("Designation Mark Deleted"), Expression("jDesignation.[MarkDeleted]")]
        public Boolean? DesignationMarkDeleted
        {
            get { return Fields.DesignationMarkDeleted[this]; }
            set { Fields.DesignationMarkDeleted[this] = value; }
        }

        [DisplayName("Gender Gender Name"), Expression("jGender.[GenderName]")]
        public String GenderGenderName
        {
            get { return Fields.GenderGenderName[this]; }
            set { Fields.GenderGenderName[this] = value; }
        }

        [DisplayName("Division Division Name"), Expression("jDivision.[DivisionName]")]
        public String DivisionDivisionName
        {
            get { return Fields.DivisionDivisionName[this]; }
            set { Fields.DivisionDivisionName[this] = value; }
        }

        [DisplayName("Division Division Code"), Expression("jDivision.[DivisionCode]")]
        public String DivisionDivisionCode
        {
            get { return Fields.DivisionDivisionCode[this]; }
            set { Fields.DivisionDivisionCode[this] = value; }
        }

        [DisplayName("Division Company Master Id"), Expression("jDivision.[CompanyMasterID]")]
        public Int32? DivisionCompanyMasterId
        {
            get { return Fields.DivisionCompanyMasterId[this]; }
            set { Fields.DivisionCompanyMasterId[this] = value; }
        }

        [DisplayName("Division Details"), Expression("jDivision.[Details]")]
        public String DivisionDetails
        {
            get { return Fields.DivisionDetails[this]; }
            set { Fields.DivisionDetails[this] = value; }
        }

        [DisplayName("Division Created Date Time"), Expression("jDivision.[CreatedDateTime]")]
        public DateTime? DivisionCreatedDateTime
        {
            get { return Fields.DivisionCreatedDateTime[this]; }
            set { Fields.DivisionCreatedDateTime[this] = value; }
        }

        [DisplayName("Division Mark Deleted"), Expression("jDivision.[MarkDeleted]")]
        public Boolean? DivisionMarkDeleted
        {
            get { return Fields.DivisionMarkDeleted[this]; }
            set { Fields.DivisionMarkDeleted[this] = value; }
        }

        [DisplayName("Sub Department Sub Department Name"), Expression("jSubDepartment.[SubDepartmentName]")]
        public String SubDepartmentSubDepartmentName
        {
            get { return Fields.SubDepartmentSubDepartmentName[this]; }
            set { Fields.SubDepartmentSubDepartmentName[this] = value; }
        }

        [DisplayName("Sub Department Sub Department Code"), Expression("jSubDepartment.[SubDepartmentCode]")]
        public String SubDepartmentSubDepartmentCode
        {
            get { return Fields.SubDepartmentSubDepartmentCode[this]; }
            set { Fields.SubDepartmentSubDepartmentCode[this] = value; }
        }

        [DisplayName("Sub Department Department Id"), Expression("jSubDepartment.[DepartmentID]")]
        public Int32? SubDepartmentDepartmentId
        {
            get { return Fields.SubDepartmentDepartmentId[this]; }
            set { Fields.SubDepartmentDepartmentId[this] = value; }
        }

        [DisplayName("Sub Department Details"), Expression("jSubDepartment.[Details]")]
        public String SubDepartmentDetails
        {
            get { return Fields.SubDepartmentDetails[this]; }
            set { Fields.SubDepartmentDetails[this] = value; }
        }

        [DisplayName("Sub Department Created Date Time"), Expression("jSubDepartment.[CreatedDateTime]")]
        public DateTime? SubDepartmentCreatedDateTime
        {
            get { return Fields.SubDepartmentCreatedDateTime[this]; }
            set { Fields.SubDepartmentCreatedDateTime[this] = value; }
        }

        [DisplayName("Sub Department Mark Deleted"), Expression("jSubDepartment.[MarkDeleted]")]
        public Boolean? SubDepartmentMarkDeleted
        {
            get { return Fields.SubDepartmentMarkDeleted[this]; }
            set { Fields.SubDepartmentMarkDeleted[this] = value; }
        }

        [DisplayName("Maretial Status Maretial Status Name"), Expression("jMaretialStatus.[MaretialStatusName]")]
        public String MaretialStatusMaretialStatusName
        {
            get { return Fields.MaretialStatusMaretialStatusName[this]; }
            set { Fields.MaretialStatusMaretialStatusName[this] = value; }
        }

        [DisplayName("Employee Type Employee Type Name"), Expression("jEmployeeType.[EmployeeTypeName]")]
        public String EmployeeTypeEmployeeTypeName
        {
            get { return Fields.EmployeeTypeEmployeeTypeName[this]; }
            set { Fields.EmployeeTypeEmployeeTypeName[this] = value; }
        }

        [DisplayName("Employment Type"), Expression("jEmploymentType.[EmploymentType]")]
        public String EmploymentType
        {
            get { return Fields.EmploymentType[this]; }
            set { Fields.EmploymentType[this] = value; }
        }

        [DisplayName("Blood Group"), Expression("jBloodGroup.[BloodGroup]")]
        public String BloodGroup
        {
            get { return Fields.BloodGroup[this]; }
            set { Fields.BloodGroup[this] = value; }
        }

        [DisplayName("Company Master Company Name"), Expression("jCompanyMaster.[CompanyName]")]
        public String CompanyMasterCompanyName
        {
            get { return Fields.CompanyMasterCompanyName[this]; }
            set { Fields.CompanyMasterCompanyName[this] = value; }
        }

        [DisplayName("Company Master Company Group Id"), Expression("jCompanyMaster.[CompanyGroupID]")]
        public Int32? CompanyMasterCompanyGroupId
        {
            get { return Fields.CompanyMasterCompanyGroupId[this]; }
            set { Fields.CompanyMasterCompanyGroupId[this] = value; }
        }

        [DisplayName("Company Master Company Details"), Expression("jCompanyMaster.[CompanyDetails]")]
        public String CompanyMasterCompanyDetails
        {
            get { return Fields.CompanyMasterCompanyDetails[this]; }
            set { Fields.CompanyMasterCompanyDetails[this] = value; }
        }

        [DisplayName("Company Master Locations"), Expression("jCompanyMaster.[Locations]")]
        public String CompanyMasterLocations
        {
            get { return Fields.CompanyMasterLocations[this]; }
            set { Fields.CompanyMasterLocations[this] = value; }
        }

        [DisplayName("Company Master Email Id"), Expression("jCompanyMaster.[EmailID]")]
        public String CompanyMasterEmailId
        {
            get { return Fields.CompanyMasterEmailId[this]; }
            set { Fields.CompanyMasterEmailId[this] = value; }
        }

        [DisplayName("Company Master Off No"), Expression("jCompanyMaster.[OffNo]")]
        public String CompanyMasterOffNo
        {
            get { return Fields.CompanyMasterOffNo[this]; }
            set { Fields.CompanyMasterOffNo[this] = value; }
        }

        [DisplayName("Company Master Financial Year Master Id"), Expression("jCompanyMaster.[FinancialYearMasterID]")]
        public Int32? CompanyMasterFinancialYearMasterId
        {
            get { return Fields.CompanyMasterFinancialYearMasterId[this]; }
            set { Fields.CompanyMasterFinancialYearMasterId[this] = value; }
        }

        [DisplayName("Company Master Created Date Time"), Expression("jCompanyMaster.[CreatedDateTime]")]
        public DateTime? CompanyMasterCreatedDateTime
        {
            get { return Fields.CompanyMasterCreatedDateTime[this]; }
            set { Fields.CompanyMasterCreatedDateTime[this] = value; }
        }

        [DisplayName("Company Master Mark Deleted"), Expression("jCompanyMaster.[MarkDeleted]")]
        public Boolean? CompanyMasterMarkDeleted
        {
            get { return Fields.CompanyMasterMarkDeleted[this]; }
            set { Fields.CompanyMasterMarkDeleted[this] = value; }
        }

        [DisplayName("Company Master Smtp Server Name"), Expression("jCompanyMaster.[SmtpServerName]")]
        public String CompanyMasterSmtpServerName
        {
            get { return Fields.CompanyMasterSmtpServerName[this]; }
            set { Fields.CompanyMasterSmtpServerName[this] = value; }
        }

        [DisplayName("Company Master Smtp Port No"), Expression("jCompanyMaster.[SmtpPortNo]")]
        public String CompanyMasterSmtpPortNo
        {
            get { return Fields.CompanyMasterSmtpPortNo[this]; }
            set { Fields.CompanyMasterSmtpPortNo[this] = value; }
        }

        [DisplayName("Company Master Smtp User Name"), Expression("jCompanyMaster.[SmtpUserName]")]
        public String CompanyMasterSmtpUserName
        {
            get { return Fields.CompanyMasterSmtpUserName[this]; }
            set { Fields.CompanyMasterSmtpUserName[this] = value; }
        }

        [DisplayName("Company Master Smtp Password"), Expression("jCompanyMaster.[SmtpPassword]")]
        public String CompanyMasterSmtpPassword
        {
            get { return Fields.CompanyMasterSmtpPassword[this]; }
            set { Fields.CompanyMasterSmtpPassword[this] = value; }
        }

        [DisplayName("Company Master Is Audit Trail"), Expression("jCompanyMaster.[IsAuditTrail]")]
        public Boolean? CompanyMasterIsAuditTrail
        {
            get { return Fields.CompanyMasterIsAuditTrail[this]; }
            set { Fields.CompanyMasterIsAuditTrail[this] = value; }
        }

        [DisplayName("Company Master Isenablessl"), Expression("jCompanyMaster.[Isenablessl]")]
        public Boolean? CompanyMasterIsenablessl
        {
            get { return Fields.CompanyMasterIsenablessl[this]; }
            set { Fields.CompanyMasterIsenablessl[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EmployeeMasterId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EmployeeCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeeMasterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EmployeeMasterId;
            public StringField EmployeeCode;
            public Int32Field SalutationId;
            public Int32Field DepartmentId;
            public Int32Field CompanyLocationId;
            public Int32Field DesignationId;
            public Int32Field GenderId;
            public Int32Field DivisionId;
            public Int32Field SubDepartmentId;
            public Int32Field MaretialStatusId;
            public Int32Field EmployeeTypeId;
            public Int32Field EmploymentTypeId;
            public Int32Field BloodGroupId;
            public Int32Field CompanyMasterId;
            public StringField FirstName;
            public StringField MiddleName;
            public StringField LastName;
            public StringField MobileNumber;
            public StringField City;
            public StringField State;
            public StringField Country;
            public StringField Address;
            public DateTimeField DateofBirth;
            public DateTimeField DateOfJoining;
            public DateTimeField ResignDate;
            public StringField EmailAddress;
            public StringField Email;
            public Int32Field ManagerId;
            public StringField AadharCardNo;
            public StringField CardNo;
            public BooleanField IsExpiryAllowed;
            public DateTimeField CardExpiry;
            public StringField PhotoPath;
            public BooleanField MarkDeleted;
            public StringField Extra1;
            public StringField Extra2;
            public StringField Extra3;
            public StringField Extra4;
            public StringField Extra5;
            public BooleanField IsEmployeeLogin;

            public StringField SalutationSalutationName;

            public StringField DepartmentDepartmentName;
            public StringField DepartmentDepartmentCode;
            public Int32Field DepartmentCompanyLocationId;
            public Int32Field DepartmentDivisionId;
            public StringField DepartmentDetails;
            public DateTimeField DepartmentCreatedDateTime;
            public BooleanField DepartmentMarkDeleted;

            public Int32Field CompanyLocationCompanyMasterId;
            public Int32Field CompanyLocationLocationMasterId;
            public DateTimeField CompanyLocationCreatedDateTime;
            public BooleanField CompanyLocationMarkDeleted;

            public StringField DesignationDesignationName;
            public StringField DesignationDesignationCode;
            public Int32Field DesignationCompanyMasterId;
            public StringField DesignationDetails;
            public DateTimeField DesignationCreatedDateTime;
            public BooleanField DesignationMarkDeleted;

            public StringField GenderGenderName;

            public StringField DivisionDivisionName;
            public StringField DivisionDivisionCode;
            public Int32Field DivisionCompanyMasterId;
            public StringField DivisionDetails;
            public DateTimeField DivisionCreatedDateTime;
            public BooleanField DivisionMarkDeleted;

            public StringField SubDepartmentSubDepartmentName;
            public StringField SubDepartmentSubDepartmentCode;
            public Int32Field SubDepartmentDepartmentId;
            public StringField SubDepartmentDetails;
            public DateTimeField SubDepartmentCreatedDateTime;
            public BooleanField SubDepartmentMarkDeleted;

            public StringField MaretialStatusMaretialStatusName;

            public StringField EmployeeTypeEmployeeTypeName;

            public StringField EmploymentType;

            public StringField BloodGroup;

            public StringField CompanyMasterCompanyName;
            public Int32Field CompanyMasterCompanyGroupId;
            public StringField CompanyMasterCompanyDetails;
            public StringField CompanyMasterLocations;
            public StringField CompanyMasterEmailId;
            public StringField CompanyMasterOffNo;
            public Int32Field CompanyMasterFinancialYearMasterId;
            public DateTimeField CompanyMasterCreatedDateTime;
            public BooleanField CompanyMasterMarkDeleted;
            public StringField CompanyMasterSmtpServerName;
            public StringField CompanyMasterSmtpPortNo;
            public StringField CompanyMasterSmtpUserName;
            public StringField CompanyMasterSmtpPassword;
            public BooleanField CompanyMasterIsAuditTrail;
            public BooleanField CompanyMasterIsenablessl;
        }
    }
}

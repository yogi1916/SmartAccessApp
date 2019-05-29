
namespace ESignature.AccessEmployee.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("AccessEmployee"), TableName("[dbo].[EmployeeFunctionCards]")]
    [DisplayName("Employee Function Cards"), InstanceName("Employee Function Cards")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class EmployeeFunctionCardsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Employee Function Card Id"), Column("EmployeeFunctionCardID"), Identity]
        public Int32? EmployeeFunctionCardId
        {
            get { return Fields.EmployeeFunctionCardId[this]; }
            set { Fields.EmployeeFunctionCardId[this] = value; }
        }

        [DisplayName("Card Type"), NotNull, ForeignKey("[dbo].[MasterCardType]", "CardTypeID"), LeftJoin("jCardType"), TextualField("CardTypeCardTypeName")]
        public Int32? CardType
        {
            get { return Fields.CardType[this]; }
            set { Fields.CardType[this] = value; }
        }

        [DisplayName("Employee Master"), Column("EmployeeMasterID"), NotNull, ForeignKey("[dbo].[EmployeeMaster]", "EmployeeMasterID"), LeftJoin("jEmployeeMaster"), TextualField("EmployeeMasterEmployeeCode")]
        public Int32? EmployeeMasterId
        {
            get { return Fields.EmployeeMasterId[this]; }
            set { Fields.EmployeeMasterId[this] = value; }
        }

        [DisplayName("Card No"), Size(10), NotNull, QuickSearch]
        public String CardNo
        {
            get { return Fields.CardNo[this]; }
            set { Fields.CardNo[this] = value; }
        }

        [DisplayName("Csn No"), Column("CSNNo"), Size(10)]
        public String CsnNo
        {
            get { return Fields.CsnNo[this]; }
            set { Fields.CsnNo[this] = value; }
        }

        [DisplayName("Created Date Time"), NotNull]
        public DateTime? CreatedDateTime
        {
            get { return Fields.CreatedDateTime[this]; }
            set { Fields.CreatedDateTime[this] = value; }
        }

        [DisplayName("Mark Deleted")]
        public Boolean? MarkDeleted
        {
            get { return Fields.MarkDeleted[this]; }
            set { Fields.MarkDeleted[this] = value; }
        }

        [DisplayName("Facility Code"), Size(5)]
        public String FacilityCode
        {
            get { return Fields.FacilityCode[this]; }
            set { Fields.FacilityCode[this] = value; }
        }

        [DisplayName("Temp Func Id"), Column("TempFuncID")]
        public Int32? TempFuncId
        {
            get { return Fields.TempFuncId[this]; }
            set { Fields.TempFuncId[this] = value; }
        }

        [DisplayName("Card Type Card Type Name"), Expression("jCardType.[CardTypeName]")]
        public String CardTypeCardTypeName
        {
            get { return Fields.CardTypeCardTypeName[this]; }
            set { Fields.CardTypeCardTypeName[this] = value; }
        }

        [DisplayName("Employee Master Employee Code"), Expression("jEmployeeMaster.[EmployeeCode]")]
        public String EmployeeMasterEmployeeCode
        {
            get { return Fields.EmployeeMasterEmployeeCode[this]; }
            set { Fields.EmployeeMasterEmployeeCode[this] = value; }
        }

        [DisplayName("Employee Master Salutation Id"), Expression("jEmployeeMaster.[SalutationID]")]
        public Int32? EmployeeMasterSalutationId
        {
            get { return Fields.EmployeeMasterSalutationId[this]; }
            set { Fields.EmployeeMasterSalutationId[this] = value; }
        }

        [DisplayName("Employee Master Department Id"), Expression("jEmployeeMaster.[DepartmentID]")]
        public Int32? EmployeeMasterDepartmentId
        {
            get { return Fields.EmployeeMasterDepartmentId[this]; }
            set { Fields.EmployeeMasterDepartmentId[this] = value; }
        }

        [DisplayName("Employee Master Company Location Id"), Expression("jEmployeeMaster.[CompanyLocationID]")]
        public Int32? EmployeeMasterCompanyLocationId
        {
            get { return Fields.EmployeeMasterCompanyLocationId[this]; }
            set { Fields.EmployeeMasterCompanyLocationId[this] = value; }
        }

        [DisplayName("Employee Master Designation Id"), Expression("jEmployeeMaster.[DesignationID]")]
        public Int32? EmployeeMasterDesignationId
        {
            get { return Fields.EmployeeMasterDesignationId[this]; }
            set { Fields.EmployeeMasterDesignationId[this] = value; }
        }

        [DisplayName("Employee Master Gender Id"), Expression("jEmployeeMaster.[GenderID]")]
        public Int32? EmployeeMasterGenderId
        {
            get { return Fields.EmployeeMasterGenderId[this]; }
            set { Fields.EmployeeMasterGenderId[this] = value; }
        }

        [DisplayName("Employee Master Division Id"), Expression("jEmployeeMaster.[DivisionID]")]
        public Int32? EmployeeMasterDivisionId
        {
            get { return Fields.EmployeeMasterDivisionId[this]; }
            set { Fields.EmployeeMasterDivisionId[this] = value; }
        }

        [DisplayName("Employee Master Sub Department Id"), Expression("jEmployeeMaster.[SubDepartmentID]")]
        public Int32? EmployeeMasterSubDepartmentId
        {
            get { return Fields.EmployeeMasterSubDepartmentId[this]; }
            set { Fields.EmployeeMasterSubDepartmentId[this] = value; }
        }

        [DisplayName("Employee Master Maretial Status Id"), Expression("jEmployeeMaster.[MaretialStatusID]")]
        public Int32? EmployeeMasterMaretialStatusId
        {
            get { return Fields.EmployeeMasterMaretialStatusId[this]; }
            set { Fields.EmployeeMasterMaretialStatusId[this] = value; }
        }

        [DisplayName("Employee Master Employee Type Id"), Expression("jEmployeeMaster.[EmployeeTypeID]")]
        public Int32? EmployeeMasterEmployeeTypeId
        {
            get { return Fields.EmployeeMasterEmployeeTypeId[this]; }
            set { Fields.EmployeeMasterEmployeeTypeId[this] = value; }
        }

        [DisplayName("Employee Master Employment Type Id"), Expression("jEmployeeMaster.[EmploymentTypeID]")]
        public Int32? EmployeeMasterEmploymentTypeId
        {
            get { return Fields.EmployeeMasterEmploymentTypeId[this]; }
            set { Fields.EmployeeMasterEmploymentTypeId[this] = value; }
        }

        [DisplayName("Employee Master Blood Group Id"), Expression("jEmployeeMaster.[BloodGroupID]")]
        public Int32? EmployeeMasterBloodGroupId
        {
            get { return Fields.EmployeeMasterBloodGroupId[this]; }
            set { Fields.EmployeeMasterBloodGroupId[this] = value; }
        }

        [DisplayName("Employee Master Company Master Id"), Expression("jEmployeeMaster.[CompanyMasterID]")]
        public Int32? EmployeeMasterCompanyMasterId
        {
            get { return Fields.EmployeeMasterCompanyMasterId[this]; }
            set { Fields.EmployeeMasterCompanyMasterId[this] = value; }
        }

        [DisplayName("Employee Master First Name"), Expression("jEmployeeMaster.[FirstName]")]
        public String EmployeeMasterFirstName
        {
            get { return Fields.EmployeeMasterFirstName[this]; }
            set { Fields.EmployeeMasterFirstName[this] = value; }
        }

        [DisplayName("Employee Master Middle Name"), Expression("jEmployeeMaster.[MiddleName]")]
        public String EmployeeMasterMiddleName
        {
            get { return Fields.EmployeeMasterMiddleName[this]; }
            set { Fields.EmployeeMasterMiddleName[this] = value; }
        }

        [DisplayName("Employee Master Last Name"), Expression("jEmployeeMaster.[LastName]")]
        public String EmployeeMasterLastName
        {
            get { return Fields.EmployeeMasterLastName[this]; }
            set { Fields.EmployeeMasterLastName[this] = value; }
        }

        [DisplayName("Employee Master Mobile Number"), Expression("jEmployeeMaster.[MobileNumber]")]
        public String EmployeeMasterMobileNumber
        {
            get { return Fields.EmployeeMasterMobileNumber[this]; }
            set { Fields.EmployeeMasterMobileNumber[this] = value; }
        }

        [DisplayName("Employee Master City"), Expression("jEmployeeMaster.[City]")]
        public String EmployeeMasterCity
        {
            get { return Fields.EmployeeMasterCity[this]; }
            set { Fields.EmployeeMasterCity[this] = value; }
        }

        [DisplayName("Employee Master State"), Expression("jEmployeeMaster.[State]")]
        public String EmployeeMasterState
        {
            get { return Fields.EmployeeMasterState[this]; }
            set { Fields.EmployeeMasterState[this] = value; }
        }

        [DisplayName("Employee Master Country"), Expression("jEmployeeMaster.[Country]")]
        public String EmployeeMasterCountry
        {
            get { return Fields.EmployeeMasterCountry[this]; }
            set { Fields.EmployeeMasterCountry[this] = value; }
        }

        [DisplayName("Employee Master Address"), Expression("jEmployeeMaster.[Address]")]
        public String EmployeeMasterAddress
        {
            get { return Fields.EmployeeMasterAddress[this]; }
            set { Fields.EmployeeMasterAddress[this] = value; }
        }

        [DisplayName("Employee Master Dateof Birth"), Expression("jEmployeeMaster.[DateofBirth]")]
        public DateTime? EmployeeMasterDateofBirth
        {
            get { return Fields.EmployeeMasterDateofBirth[this]; }
            set { Fields.EmployeeMasterDateofBirth[this] = value; }
        }

        [DisplayName("Employee Master Date Of Joining"), Expression("jEmployeeMaster.[DateOfJoining]")]
        public DateTime? EmployeeMasterDateOfJoining
        {
            get { return Fields.EmployeeMasterDateOfJoining[this]; }
            set { Fields.EmployeeMasterDateOfJoining[this] = value; }
        }

        [DisplayName("Employee Master Resign Date"), Expression("jEmployeeMaster.[ResignDate]")]
        public DateTime? EmployeeMasterResignDate
        {
            get { return Fields.EmployeeMasterResignDate[this]; }
            set { Fields.EmployeeMasterResignDate[this] = value; }
        }

        [DisplayName("Employee Master Email Address"), Expression("jEmployeeMaster.[EmailAddress]")]
        public String EmployeeMasterEmailAddress
        {
            get { return Fields.EmployeeMasterEmailAddress[this]; }
            set { Fields.EmployeeMasterEmailAddress[this] = value; }
        }

        [DisplayName("Employee Master Email"), Expression("jEmployeeMaster.[Email]")]
        public String EmployeeMasterEmail
        {
            get { return Fields.EmployeeMasterEmail[this]; }
            set { Fields.EmployeeMasterEmail[this] = value; }
        }

        [DisplayName("Employee Master Manager Id"), Expression("jEmployeeMaster.[ManagerID]")]
        public Int32? EmployeeMasterManagerId
        {
            get { return Fields.EmployeeMasterManagerId[this]; }
            set { Fields.EmployeeMasterManagerId[this] = value; }
        }

        [DisplayName("Employee Master Aadhar Card No"), Expression("jEmployeeMaster.[AadharCardNo]")]
        public String EmployeeMasterAadharCardNo
        {
            get { return Fields.EmployeeMasterAadharCardNo[this]; }
            set { Fields.EmployeeMasterAadharCardNo[this] = value; }
        }

        [DisplayName("Employee Master Is Expiry Allowed"), Expression("jEmployeeMaster.[IsExpiryAllowed]")]
        public Boolean? EmployeeMasterIsExpiryAllowed
        {
            get { return Fields.EmployeeMasterIsExpiryAllowed[this]; }
            set { Fields.EmployeeMasterIsExpiryAllowed[this] = value; }
        }

        [DisplayName("Employee Master Card Expiry"), Expression("jEmployeeMaster.[CardExpiry]")]
        public DateTime? EmployeeMasterCardExpiry
        {
            get { return Fields.EmployeeMasterCardExpiry[this]; }
            set { Fields.EmployeeMasterCardExpiry[this] = value; }
        }

        [DisplayName("Employee Master Photo Path"), Expression("jEmployeeMaster.[PhotoPath]")]
        public String EmployeeMasterPhotoPath
        {
            get { return Fields.EmployeeMasterPhotoPath[this]; }
            set { Fields.EmployeeMasterPhotoPath[this] = value; }
        }

        [DisplayName("Employee Master Mark Deleted"), Expression("jEmployeeMaster.[MarkDeleted]")]
        public Boolean? EmployeeMasterMarkDeleted
        {
            get { return Fields.EmployeeMasterMarkDeleted[this]; }
            set { Fields.EmployeeMasterMarkDeleted[this] = value; }
        }

        [DisplayName("Employee Master Extra1"), Expression("jEmployeeMaster.[Extra1]")]
        public String EmployeeMasterExtra1
        {
            get { return Fields.EmployeeMasterExtra1[this]; }
            set { Fields.EmployeeMasterExtra1[this] = value; }
        }

        [DisplayName("Employee Master Extra2"), Expression("jEmployeeMaster.[Extra2]")]
        public String EmployeeMasterExtra2
        {
            get { return Fields.EmployeeMasterExtra2[this]; }
            set { Fields.EmployeeMasterExtra2[this] = value; }
        }

        [DisplayName("Employee Master Extra3"), Expression("jEmployeeMaster.[Extra3]")]
        public String EmployeeMasterExtra3
        {
            get { return Fields.EmployeeMasterExtra3[this]; }
            set { Fields.EmployeeMasterExtra3[this] = value; }
        }

        [DisplayName("Employee Master Extra4"), Expression("jEmployeeMaster.[Extra4]")]
        public String EmployeeMasterExtra4
        {
            get { return Fields.EmployeeMasterExtra4[this]; }
            set { Fields.EmployeeMasterExtra4[this] = value; }
        }

        [DisplayName("Employee Master Extra5"), Expression("jEmployeeMaster.[Extra5]")]
        public String EmployeeMasterExtra5
        {
            get { return Fields.EmployeeMasterExtra5[this]; }
            set { Fields.EmployeeMasterExtra5[this] = value; }
        }

        [DisplayName("Employee Master Is Employee Login"), Expression("jEmployeeMaster.[IsEmployeeLogin]")]
        public Boolean? EmployeeMasterIsEmployeeLogin
        {
            get { return Fields.EmployeeMasterIsEmployeeLogin[this]; }
            set { Fields.EmployeeMasterIsEmployeeLogin[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EmployeeFunctionCardId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CardNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeeFunctionCardsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EmployeeFunctionCardId;
            public Int32Field CardType;
            public Int32Field EmployeeMasterId;
            public StringField CardNo;
            public StringField CsnNo;
            public DateTimeField CreatedDateTime;
            public BooleanField MarkDeleted;
            public StringField FacilityCode;
            public Int32Field TempFuncId;

            public StringField CardTypeCardTypeName;

            public StringField EmployeeMasterEmployeeCode;
            public Int32Field EmployeeMasterSalutationId;
            public Int32Field EmployeeMasterDepartmentId;
            public Int32Field EmployeeMasterCompanyLocationId;
            public Int32Field EmployeeMasterDesignationId;
            public Int32Field EmployeeMasterGenderId;
            public Int32Field EmployeeMasterDivisionId;
            public Int32Field EmployeeMasterSubDepartmentId;
            public Int32Field EmployeeMasterMaretialStatusId;
            public Int32Field EmployeeMasterEmployeeTypeId;
            public Int32Field EmployeeMasterEmploymentTypeId;
            public Int32Field EmployeeMasterBloodGroupId;
            public Int32Field EmployeeMasterCompanyMasterId;
            public StringField EmployeeMasterFirstName;
            public StringField EmployeeMasterMiddleName;
            public StringField EmployeeMasterLastName;
            public StringField EmployeeMasterMobileNumber;
            public StringField EmployeeMasterCity;
            public StringField EmployeeMasterState;
            public StringField EmployeeMasterCountry;
            public StringField EmployeeMasterAddress;
            public DateTimeField EmployeeMasterDateofBirth;
            public DateTimeField EmployeeMasterDateOfJoining;
            public DateTimeField EmployeeMasterResignDate;
            public StringField EmployeeMasterEmailAddress;
            public StringField EmployeeMasterEmail;
            public Int32Field EmployeeMasterManagerId;
            public StringField EmployeeMasterAadharCardNo;
            public BooleanField EmployeeMasterIsExpiryAllowed;
            public DateTimeField EmployeeMasterCardExpiry;
            public StringField EmployeeMasterPhotoPath;
            public BooleanField EmployeeMasterMarkDeleted;
            public StringField EmployeeMasterExtra1;
            public StringField EmployeeMasterExtra2;
            public StringField EmployeeMasterExtra3;
            public StringField EmployeeMasterExtra4;
            public StringField EmployeeMasterExtra5;
            public BooleanField EmployeeMasterIsEmployeeLogin;
        }
    }
}

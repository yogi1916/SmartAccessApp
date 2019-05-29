
namespace ESignature.CardManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("CardManagement"), TableName("[dbo].[CardPool]")]
    [DisplayName("Card Pool"), InstanceName("Card Pool")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class CardPoolRow : Row, IIdRow, INameRow
    {
        [DisplayName("Card Pool Id"), Column("CardPoolID"), Identity]
        public Int32? CardPoolId
        {
            get { return Fields.CardPoolId[this]; }
            set { Fields.CardPoolId[this] = value; }
        }

        [DisplayName("Card No"), Size(100), NotNull, QuickSearch]
        public String CardNo
        {
            get { return Fields.CardNo[this]; }
            set { Fields.CardNo[this] = value; }
        }

        [DisplayName("Card Tech"), Column("CardTechID"), NotNull, ForeignKey("[dbo].[MasterCardTechnology]", "CardTechID"), LeftJoin("jCardTech"), TextualField("CardTechCardTechName")]
        public Int32? CardTechId
        {
            get { return Fields.CardTechId[this]; }
            set { Fields.CardTechId[this] = value; }
        }

        [DisplayName("Card Csn No"), Column("CardCSNNo"), Size(100)]
        public String CardCsnNo
        {
            get { return Fields.CardCsnNo[this]; }
            set { Fields.CardCsnNo[this] = value; }
        }

        [DisplayName("Card Use Type"), NotNull, ForeignKey("[dbo].[MasterCardUseType]", "CardUseTypeID"), LeftJoin("jCardUseType"), TextualField("CardUseTypeCardUseTypeName")]
        public Int32? CardUseType
        {
            get { return Fields.CardUseType[this]; }
            set { Fields.CardUseType[this] = value; }
        }

        [DisplayName("Card Type"), NotNull, ForeignKey("[dbo].[MasterCardType]", "CardTypeID"), LeftJoin("jCardType"), TextualField("CardTypeCardTypeName")]
        public Int32? CardType
        {
            get { return Fields.CardType[this]; }
            set { Fields.CardType[this] = value; }
        }

        [DisplayName("Card Status"), NotNull, ForeignKey("[dbo].[MasterCardStatus]", "CardStatusID"), LeftJoin("jCardStatus"), TextualField("CardStatus1")]
        public Int32? CardStatus
        {
            get { return Fields.CardStatus[this]; }
            set { Fields.CardStatus[this] = value; }
        }

        [DisplayName("Card Usage Status"), NotNull, ForeignKey("[dbo].[MasterCardActivity]", "CardActivityiD"), LeftJoin("jCardUsageStatus"), TextualField("CardUsageStatusActivity")]
        public Int32? CardUsageStatus
        {
            get { return Fields.CardUsageStatus[this]; }
            set { Fields.CardUsageStatus[this] = value; }
        }

        [DisplayName("Currently Assigned To"), Size(100)]
        public String CurrentlyAssignedTo
        {
            get { return Fields.CurrentlyAssignedTo[this]; }
            set { Fields.CurrentlyAssignedTo[this] = value; }
        }

        [DisplayName("Card Expiry Date")]
        public DateTime? CardExpiryDate
        {
            get { return Fields.CardExpiryDate[this]; }
            set { Fields.CardExpiryDate[this] = value; }
        }

        [DisplayName("Card Auth Type"), Size(100)]
        public String CardAuthType
        {
            get { return Fields.CardAuthType[this]; }
            set { Fields.CardAuthType[this] = value; }
        }

        [DisplayName("No Of Days Allowed From Today")]
        public Int32? NoOfDaysAllowedFromToday
        {
            get { return Fields.NoOfDaysAllowedFromToday[this]; }
            set { Fields.NoOfDaysAllowedFromToday[this] = value; }
        }

        [DisplayName("Remark"), Size(100)]
        public String Remark
        {
            get { return Fields.Remark[this]; }
            set { Fields.Remark[this] = value; }
        }

        [DisplayName("Description"), Size(100)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Last Modified")]
        public DateTime? LastModified
        {
            get { return Fields.LastModified[this]; }
            set { Fields.LastModified[this] = value; }
        }

        [DisplayName("Created Date Time"), NotNull]
        public DateTime? CreatedDateTime
        {
            get { return Fields.CreatedDateTime[this]; }
            set { Fields.CreatedDateTime[this] = value; }
        }

        [DisplayName("Added By")]
        public Int32? AddedBy
        {
            get { return Fields.AddedBy[this]; }
            set { Fields.AddedBy[this] = value; }
        }

        [DisplayName("Company Location"), Column("CompanyLocationID"), NotNull, ForeignKey("[dbo].[CompanyLocations]", "CompanyLocationID"), LeftJoin("jCompanyLocation")]
        public Int32? CompanyLocationId
        {
            get { return Fields.CompanyLocationId[this]; }
            set { Fields.CompanyLocationId[this] = value; }
        }

        [DisplayName("Card Tech Card Tech Name"), Expression("jCardTech.[CardTechName]")]
        public String CardTechCardTechName
        {
            get { return Fields.CardTechCardTechName[this]; }
            set { Fields.CardTechCardTechName[this] = value; }
        }

        [DisplayName("Card Use Type Card Use Type Name"), Expression("jCardUseType.[CardUseTypeName]")]
        public String CardUseTypeCardUseTypeName
        {
            get { return Fields.CardUseTypeCardUseTypeName[this]; }
            set { Fields.CardUseTypeCardUseTypeName[this] = value; }
        }

        [DisplayName("Card Type Card Type Name"), Expression("jCardType.[CardTypeName]")]
        public String CardTypeCardTypeName
        {
            get { return Fields.CardTypeCardTypeName[this]; }
            set { Fields.CardTypeCardTypeName[this] = value; }
        }

        [DisplayName("Card Status"), Expression("jCardStatus.[CardStatus]")]
        public String CardStatus1
        {
            get { return Fields.CardStatus1[this]; }
            set { Fields.CardStatus1[this] = value; }
        }

        [DisplayName("Card Usage Status Activity"), Expression("jCardUsageStatus.[Activity]")]
        public String CardUsageStatusActivity
        {
            get { return Fields.CardUsageStatusActivity[this]; }
            set { Fields.CardUsageStatusActivity[this] = value; }
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

        [DisplayName("Company Location"), Expression("jCompanyLocation.[LocationMasterID]"), NotNull, ForeignKey("[dbo].[LocationMaster]", "LocationMasterID"), LeftJoin("jCompanyLocationMaster")]
        public Int32? LocationMasterID
        {
            get { return Fields.LocationMasterID[this]; }
            set { Fields.LocationMasterID[this] = value; }
        }
        [DisplayName("LocationName"), Expression("jCompanyLocationMaster.[LocationName]")]
        public String LocationName
        {
            get { return Fields.LocationName[this]; }
            set { Fields.LocationName[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.CardPoolId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CardNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CardPoolRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CardPoolId;
            public StringField CardNo;
            public Int32Field CardTechId;
            public StringField CardCsnNo;
            public Int32Field CardUseType;
            public Int32Field CardType;
            public Int32Field CardStatus;
            public Int32Field CardUsageStatus;
            public StringField CurrentlyAssignedTo;
            public DateTimeField CardExpiryDate;
            public StringField CardAuthType;
            public Int32Field NoOfDaysAllowedFromToday;
            public StringField Remark;
            public StringField Description;
            public DateTimeField LastModified;
            public DateTimeField CreatedDateTime;
            public Int32Field AddedBy;
            public Int32Field CompanyLocationId;

            public StringField CardTechCardTechName;

            public StringField CardUseTypeCardUseTypeName;

            public StringField CardTypeCardTypeName;

            public StringField CardStatus1;

            public StringField CardUsageStatusActivity;

            public Int32Field CompanyLocationCompanyMasterId;
            public Int32Field CompanyLocationLocationMasterId;
            public Int32Field LocationMasterID;
            public StringField LocationName;
            public DateTimeField CompanyLocationCreatedDateTime;
            public BooleanField CompanyLocationMarkDeleted;
        }
    }
}

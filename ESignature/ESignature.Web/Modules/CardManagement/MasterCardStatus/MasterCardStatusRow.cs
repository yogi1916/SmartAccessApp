
namespace ESignature.CardManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("CardManagement"), TableName("[dbo].[MasterCardStatus]")]
    [DisplayName("Master Card Status"), InstanceName("Master Card Status")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class MasterCardStatusRow : Row, IIdRow, INameRow
    {
        [DisplayName("Card Status Id"), Column("CardStatusID"), PrimaryKey]
        public Int32? CardStatusId
        {
            get { return Fields.CardStatusId[this]; }
            set { Fields.CardStatusId[this] = value; }
        }

        [DisplayName("Card Status"), Size(100), NotNull, QuickSearch]
        public String CardStatus
        {
            get { return Fields.CardStatus[this]; }
            set { Fields.CardStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CardStatusId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CardStatus; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterCardStatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CardStatusId;
            public StringField CardStatus;
        }
    }
}

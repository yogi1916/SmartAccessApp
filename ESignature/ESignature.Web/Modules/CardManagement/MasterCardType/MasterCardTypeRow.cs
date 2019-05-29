
namespace ESignature.CardManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("CardManagement"), TableName("[dbo].[MasterCardType]")]
    [DisplayName("Master Card Type"), InstanceName("Master Card Type")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class MasterCardTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Card Type Id"), Column("CardTypeID"), Identity]
        public Int32? CardTypeId
        {
            get { return Fields.CardTypeId[this]; }
            set { Fields.CardTypeId[this] = value; }
        }

        [DisplayName("Card Type Name"), Size(100), NotNull, QuickSearch]
        public String CardTypeName
        {
            get { return Fields.CardTypeName[this]; }
            set { Fields.CardTypeName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CardTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CardTypeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterCardTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CardTypeId;
            public StringField CardTypeName;
        }
    }
}

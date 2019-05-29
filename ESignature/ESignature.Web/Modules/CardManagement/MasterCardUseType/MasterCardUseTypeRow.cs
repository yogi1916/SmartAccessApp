
namespace ESignature.CardManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("CardManagement"), TableName("[dbo].[MasterCardUseType]")]
    [DisplayName("Master Card Use Type"), InstanceName("Master Card Use Type")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class MasterCardUseTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Card Use Type Id"), Column("CardUseTypeID"), Identity]
        public Int32? CardUseTypeId
        {
            get { return Fields.CardUseTypeId[this]; }
            set { Fields.CardUseTypeId[this] = value; }
        }

        [DisplayName("Card Use Type Name"), Size(100), NotNull, QuickSearch]
        public String CardUseTypeName
        {
            get { return Fields.CardUseTypeName[this]; }
            set { Fields.CardUseTypeName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CardUseTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CardUseTypeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterCardUseTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CardUseTypeId;
            public StringField CardUseTypeName;
        }
    }
}

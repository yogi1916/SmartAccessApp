
namespace ESignature.CardManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("CardManagement"), TableName("[dbo].[MasterCardTechnology]")]
    [DisplayName("Master Card Technology"), InstanceName("Master Card Technology")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class MasterCardTechnologyRow : Row, IIdRow, INameRow
    {
        [DisplayName("Card Tech Id"), Column("CardTechID"), Identity]
        public Int32? CardTechId
        {
            get { return Fields.CardTechId[this]; }
            set { Fields.CardTechId[this] = value; }
        }

        [DisplayName("Card Tech Name"), Size(100), NotNull, QuickSearch]
        public String CardTechName
        {
            get { return Fields.CardTechName[this]; }
            set { Fields.CardTechName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CardTechId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CardTechName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterCardTechnologyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CardTechId;
            public StringField CardTechName;
        }
    }
}

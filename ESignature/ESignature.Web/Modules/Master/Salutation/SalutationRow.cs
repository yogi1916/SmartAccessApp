
namespace ESignature.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Salutation]")]
    [DisplayName("Salutation"), InstanceName("Salutation")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class SalutationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Salutation Id"), Column("SalutationID"), Identity]
        public Int32? SalutationId
        {
            get { return Fields.SalutationId[this]; }
            set { Fields.SalutationId[this] = value; }
        }

        [DisplayName("Salutation Name"), Size(100), NotNull, QuickSearch]
        public String SalutationName
        {
            get { return Fields.SalutationName[this]; }
            set { Fields.SalutationName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SalutationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SalutationName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SalutationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SalutationId;
            public StringField SalutationName;
        }
    }
}

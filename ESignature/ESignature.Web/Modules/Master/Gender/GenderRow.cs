
namespace ESignature.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Gender]")]
    [DisplayName("Gender"), InstanceName("Gender")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class GenderRow : Row, IIdRow, INameRow
    {
        [DisplayName("Gender Id"), Column("GenderID"), Identity]
        public Int32? GenderId
        {
            get { return Fields.GenderId[this]; }
            set { Fields.GenderId[this] = value; }
        }

        [DisplayName("Gender Name"), Size(100), NotNull, QuickSearch]
        public String GenderName
        {
            get { return Fields.GenderName[this]; }
            set { Fields.GenderName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.GenderId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.GenderName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public GenderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field GenderId;
            public StringField GenderName;
        }
    }
}

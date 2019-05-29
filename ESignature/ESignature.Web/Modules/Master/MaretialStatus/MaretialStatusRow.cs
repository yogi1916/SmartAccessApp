
namespace ESignature.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[MaretialStatus]")]
    [DisplayName("Maretial Status"), InstanceName("Maretial Status")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class MaretialStatusRow : Row, IIdRow, INameRow
    {
        [DisplayName("Maretial Status Id"), Column("MaretialStatusID"), Identity]
        public Int32? MaretialStatusId
        {
            get { return Fields.MaretialStatusId[this]; }
            set { Fields.MaretialStatusId[this] = value; }
        }

        [DisplayName("Maretial Status Name"), Size(100), NotNull, QuickSearch]
        public String MaretialStatusName
        {
            get { return Fields.MaretialStatusName[this]; }
            set { Fields.MaretialStatusName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MaretialStatusId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MaretialStatusName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MaretialStatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MaretialStatusId;
            public StringField MaretialStatusName;
        }
    }
}

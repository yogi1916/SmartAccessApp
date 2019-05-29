
namespace ESignature.CardManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("CardManagement"), TableName("[dbo].[MasterCardActivity]")]
    [DisplayName("Master Card Activity"), InstanceName("Master Card Activity")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class MasterCardActivityRow : Row, IIdRow, INameRow
    {
        [DisplayName("Card Activityi D"), PrimaryKey]
        public Int32? CardActivityiD
        {
            get { return Fields.CardActivityiD[this]; }
            set { Fields.CardActivityiD[this] = value; }
        }

        [DisplayName("Activity"), Size(100), NotNull, QuickSearch]
        public String Activity
        {
            get { return Fields.Activity[this]; }
            set { Fields.Activity[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CardActivityiD; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Activity; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterCardActivityRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CardActivityiD;
            public StringField Activity;
        }
    }
}

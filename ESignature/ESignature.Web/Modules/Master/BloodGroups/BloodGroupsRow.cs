
namespace ESignature.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[BloodGroups]")]
    [DisplayName("Blood Groups"), InstanceName("Blood Groups")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class BloodGroupsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Blood Group Id"), Column("BloodGroupID"), Identity]
        public Int32? BloodGroupId
        {
            get { return Fields.BloodGroupId[this]; }
            set { Fields.BloodGroupId[this] = value; }
        }

        [DisplayName("Blood Group"), Size(5), NotNull, QuickSearch]
        public String BloodGroup
        {
            get { return Fields.BloodGroup[this]; }
            set { Fields.BloodGroup[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BloodGroupId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BloodGroup; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BloodGroupsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BloodGroupId;
            public StringField BloodGroup;
        }
    }
}

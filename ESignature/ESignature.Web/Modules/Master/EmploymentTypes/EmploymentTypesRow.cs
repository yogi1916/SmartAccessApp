
namespace ESignature.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[EmploymentTypes]")]
    [DisplayName("Employment Types"), InstanceName("Employment Types")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class EmploymentTypesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Employment Type Id"), Column("EmploymentTypeID"), Identity]
        public Int32? EmploymentTypeId
        {
            get { return Fields.EmploymentTypeId[this]; }
            set { Fields.EmploymentTypeId[this] = value; }
        }

        [DisplayName("Employment Type Name"), Size(100), NotNull, QuickSearch]
        public String EmploymentType
        {
            get { return Fields.EmploymentType[this]; }
            set { Fields.EmploymentType[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EmploymentTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EmploymentType; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmploymentTypesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EmploymentTypeId;
            public StringField EmploymentType;
        }
    }
}

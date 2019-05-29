using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{

    [Migration(20190513163500)]
    public class DefaultDB_20190513_163500_CompanyGroup : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("CompanyGroup")
                 .WithColumn("CompanyGroupID").AsInt32().PrimaryKey().NotNullable().Identity()
                 .WithColumn("GroupName").AsString(100).NotNullable()
                 .WithColumn("CreatedDeteTime").AsDateTime().WithDefault(SystemMethods.CurrentDateTime)
                 .WithColumn("MarkDeleted").AsBoolean().NotNullable().WithDefaultValue(false);
        }
    }
}
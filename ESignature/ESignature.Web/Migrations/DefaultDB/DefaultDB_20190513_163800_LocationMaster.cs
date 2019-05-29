using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{

    [Migration(20190513163800)]
    public class DefaultDB_20190513_163800_LocationMaster : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("LocationMaster")
                .WithColumn("LocationMasterID").AsInt32().PrimaryKey().NotNullable().Identity()
                .WithColumn("LocationName").AsString(100).NotNullable()
                .WithColumn("LocationCode").AsString(25).NotNullable()
                .WithColumn("CreatedDateTime").AsDateTime().WithDefault(SystemMethods.CurrentDateTime)
                .WithColumn("MarkDeleted").AsBoolean().WithDefaultValue(false)
                .WithColumn("CompanyGroupID").AsInt32().Nullable()
                .ForeignKey("FK_CompanyGroup_LocationMaster_CompanyGroupID", "CompanyGroup", "CompanyGroupID");
        }
    }
}
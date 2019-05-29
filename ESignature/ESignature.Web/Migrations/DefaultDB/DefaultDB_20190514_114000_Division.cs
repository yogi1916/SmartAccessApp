using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{

    [Migration(20190514114000)]
    public class DefaultDB_20190514_114000_Division : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("DivisionMaster")
                .WithColumn("DivisionID").AsInt32().PrimaryKey().NotNullable().Identity()
                .WithColumn("DivisionName").AsString(100).NotNullable()
                .WithColumn("DivisionCode").AsString(100).NotNullable()
                .WithColumn("CompanyMasterID").AsInt32().NotNullable()
                .ForeignKey("FK_DivisionMaster_CompanyMaster_CompanyMasterID", "CompanyMaster", "CompanyMasterID")
                .WithColumn("Details").AsString(5000).Nullable()
                .WithColumn("CreatedDateTime").AsDateTime().WithDefault(SystemMethods.CurrentDateTime)
                .WithColumn("MarkDeleted").AsBoolean().WithDefaultValue(false);
        }
    }
}
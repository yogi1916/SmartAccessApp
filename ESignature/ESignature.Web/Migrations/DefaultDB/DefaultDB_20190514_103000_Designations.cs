using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{

    [Migration(20190514103000)]
    public class DefaultDB_20190514_103000_Designations : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("Designations")
                .WithColumn("DesignationID").AsInt32().PrimaryKey().NotNullable().Identity()
                .WithColumn("DesignationName").AsString(100).NotNullable()
                .WithColumn("DesignationCode").AsString(100).NotNullable()
                .WithColumn("CompanyMasterID").AsInt32().NotNullable()
                .ForeignKey("FK_Designations_CompanyMaster_CompanyMasterID", "CompanyMaster", "CompanyMasterID")
                .WithColumn("Details").AsString(5000).Nullable()
                .WithColumn("CreatedDateTime").AsDateTime().WithDefault(SystemMethods.CurrentDateTime)
                .WithColumn("MarkDeleted").AsBoolean().WithDefaultValue(false);
        }
    }
}
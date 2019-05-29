using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{

    [Migration(20190513163600)]
    public class DefaultDB_20190513_163600_FinancialYear : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("FinancialYearMaster")
                 .WithColumn("FinancialYearMasterID").AsInt32().PrimaryKey().NotNullable().Identity()
                 .WithColumn("StartDate").AsDateTime().NotNullable()
                 .WithColumn("EndDate").AsDateTime().NotNullable()
                 .WithColumn("CreatedDeteTime").AsDateTime().WithDefault(SystemMethods.CurrentDateTime)
                 .WithColumn("MarkDeleted").AsBoolean().NotNullable().WithDefaultValue(false)
                 .WithColumn("CompanyGroupID").AsInt32()
                 .ForeignKey("FK_CompanyGroup_CompanyGroupID", "CompanyGroup", "CompanyGroupID");
        }
    }
}
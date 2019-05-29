using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{

    [Migration(20190513163700)]
    public class DefaultDB_20190513_163700_CompanyMaster : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("CompanyMaster")
               .WithColumn("CompanyMasterID").AsInt32().PrimaryKey().NotNullable().Identity()
               .WithColumn("CompanyName").AsString(100).NotNullable()
               .WithColumn("CompanyGroupID").AsInt32().Nullable()
               .ForeignKey("FK_CompanyGroup_CompanyMaster_CompanyGroupID", "CompanyGroup", "CompanyGroupID")
               .WithColumn("CompanyDetails").AsString(5000)
               .WithColumn("Locations").AsString().Nullable()
               .WithColumn("EmailID").AsString(100).NotNullable()
               .WithColumn("OffNo").AsString(25).Nullable()
               .WithColumn("FinancialYearMasterID").AsInt32().Nullable()
               .ForeignKey("FK_FinancialYearMaster_FinancialYearMaster_FinancialYearMasterID", "FinancialYearMaster", "FinancialYearMasterID")
               .WithColumn("CreatedDateTime").AsDateTime().WithDefault(SystemMethods.CurrentDateTime)
               .WithColumn("MarkDeleted").AsBoolean().WithDefaultValue(false).Nullable()
               .WithColumn("SmtpServerName").AsString(100).Nullable()
               .WithColumn("SmtpPortNo").AsString(100).Nullable()
               .WithColumn("SmtpUserName").AsString(100).Nullable()
               .WithColumn("SmtpPassword").AsString(100).Nullable()
               .WithColumn("IsAuditTrail").AsBoolean().WithDefaultValue(true).Nullable()
               .WithColumn("Isenablessl").AsBoolean().WithDefaultValue(false).Nullable();
        }
    }
}
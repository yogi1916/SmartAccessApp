using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{

    [Migration(20190514131000)]
    public class DefaultDB_20190514_131000_Departments : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("Departments")
                .WithColumn("DepartmentID").AsInt32().PrimaryKey().NotNullable().Identity()
                .WithColumn("DepartmentName").AsString(100).NotNullable()
                .WithColumn("DepartmentCode").AsString(100).NotNullable()
                .WithColumn("CompanyLocationID").AsInt32().NotNullable()
                .ForeignKey("FK_Departments_CompanyLocatione_CompanyLocationID", "CompanyLocations", "CompanyLocationID")
                .WithColumn("DivisionID").AsInt32().Nullable()
                .ForeignKey("FK_Division_Departments_DivisionID", "DivisionMaster", "DivisionID")
                .WithColumn("Details").AsString(5000).Nullable()
                .WithColumn("CreatedDateTime").AsDateTime().WithDefault(SystemMethods.CurrentDateTime)
                .WithColumn("MarkDeleted").AsBoolean().WithDefaultValue(false);
        }
    }
}
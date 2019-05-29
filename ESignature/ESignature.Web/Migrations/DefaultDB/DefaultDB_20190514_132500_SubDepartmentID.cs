using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{

    [Migration(20190514132500)]
    public class DefaultDB_20190514_132500_SubDepartmentID : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("SubDepartments")
                 .WithColumn("SubDepartmentID").AsInt32().PrimaryKey().NotNullable().Identity()
                .WithColumn("SubDepartmentName").AsString(100).NotNullable()
                .WithColumn("SubDepartmentCode").AsString(100).NotNullable()
                .WithColumn("DepartmentID").AsInt32().Nullable()
                .ForeignKey("FK_SubDepartments_Departments_DepartmentID", "Departments", "DepartmentID")
                .WithColumn("Details").AsString(5000).Nullable()
                .WithColumn("CreatedDateTime").AsDateTime().WithDefault(SystemMethods.CurrentDateTime)
                .WithColumn("MarkDeleted").AsBoolean().WithDefaultValue(false);
        }
    }
}
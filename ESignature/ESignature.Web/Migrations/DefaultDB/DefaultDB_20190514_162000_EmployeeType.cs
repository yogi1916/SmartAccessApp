using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{
    [Migration(20190514162000)]
    public class DefaultDB_20190514_162000_EmployeeType : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("EmployeeType")
                 .WithColumn("EmployeeTypeID").AsInt32().PrimaryKey().NotNullable().Identity()
                 .WithColumn("EmployeeTypeName").AsString(100).NotNullable();

            Insert.IntoTable("EmployeeType").Row(new
            {
                EmployeeTypeName = "Employee"
            });
            Insert.IntoTable("EmployeeType").Row(new
            {
                EmployeeTypeName = "Manager"
            });           
        }
    }
}
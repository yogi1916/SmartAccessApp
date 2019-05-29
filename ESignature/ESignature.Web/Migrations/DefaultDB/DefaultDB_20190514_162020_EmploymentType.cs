using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{
    [Migration(20190514162020)]
    public class DefaultDB_20190514_162020_EmploymentType : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("EmploymentTypes")
                .WithColumn("EmploymentTypeID").AsInt32().PrimaryKey().NotNullable().Identity()
                .WithColumn("EmploymentType").AsString(100).NotNullable();

            Insert.IntoTable("EmploymentTypes").Row(new
            {
                EmploymentType = "Permanent"
            });
            Insert.IntoTable("EmploymentTypes").Row(new
            {
                EmploymentType = "Contract"
            });
            Insert.IntoTable("EmploymentTypes").Row(new
            {
                EmploymentType = "Visitor"
            });
        }
    }
}
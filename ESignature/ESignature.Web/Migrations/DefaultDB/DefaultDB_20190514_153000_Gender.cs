using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{

    [Migration(20190514153000)]
    public class DefaultDB_20190514_153000_Gender : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("Gender")
                .WithColumn("GenderID").AsInt32().PrimaryKey().NotNullable().Identity()
                .WithColumn("GenderName").AsString(100).NotNullable();

            Insert.IntoTable("Gender").Row(new
            {
                GenderName = "Male"
            });
            Insert.IntoTable("Gender").Row(new
            {
                GenderName = "Female"
            });
        }
    }
}
using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{
    [Migration(20190514161000)]
    public class DefaultDB_20190514_161000_BloodGroups : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("BloodGroups")
                 .WithColumn("BloodGroupID").AsInt32().PrimaryKey().NotNullable().Identity()
                 .WithColumn("BloodGroup").AsString(5).NotNullable();

            Insert.IntoTable("BloodGroups").Row(new
            {
                BloodGroup = "A+"
            });
            Insert.IntoTable("BloodGroups").Row(new
            {
                BloodGroup = "O+"
            });
            Insert.IntoTable("BloodGroups").Row(new
            {
                BloodGroup = "B+"
            });
            Insert.IntoTable("BloodGroups").Row(new
            {
                BloodGroup = "AB+"
            });
            Insert.IntoTable("BloodGroups").Row(new
            {
                BloodGroup = "A-"
            });
            Insert.IntoTable("BloodGroups").Row(new
            {
                BloodGroup = "O-"
            });
            Insert.IntoTable("BloodGroups").Row(new
            {
                BloodGroup = "B-"
            });
            Insert.IntoTable("BloodGroups").Row(new
            {
                BloodGroup = "AB-"
            });
        }
    }
}
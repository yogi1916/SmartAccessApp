using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{
    [Migration(20190328101900)]
    public class DefaultDB_20190517_111000_MasterCardTechnology : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("MasterCardTechnology")
                .WithColumn("CardTechID").AsInt32().PrimaryKey().NotNullable().Identity()
                .WithColumn("CardTechName").AsString(100).NotNullable();

            Insert.IntoTable("MasterCardTechnology").Row(new
            {
                CardTechName = "EM Card"
            });
            Insert.IntoTable("MasterCardTechnology").Row(new
            {
                CardTechName = "ICLASS"
            });
            Insert.IntoTable("MasterCardTechnology").Row(new
            {
                CardTechName = "Mifare"
            });
            Insert.IntoTable("MasterCardTechnology").Row(new
            {
                CardTechName = "Desfire"
            });
            Insert.IntoTable("MasterCardTechnology").Row(new
            {
                CardTechName = "Proximity"
            });
            Insert.IntoTable("MasterCardTechnology").Row(new
            {
                CardTechName = "Smart Card"
            });
        }
    }
}

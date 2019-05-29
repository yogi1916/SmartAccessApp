using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{
    [Migration(20190518110000)]
    public class DefaultDB_20190518_110000_ModelMaster : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("ModelMaster")
                 .WithColumn("ModelMasterID").AsInt32().PrimaryKey().NotNullable()
                 .WithColumn("ModelName").AsString(50)
                 .WithColumn("TypeID").AsFloat().Nullable()
                 .WithColumn("MaxReaders").AsInt32().NotNullable();
            //1
            Insert.IntoTable("ModelMaster").Row(new
            {
                ModelMasterID = 2,
                ModelName = "2 Door 2 Reader",
                TypeID = 0,
                MaxReaders = 2
            });
            //2
            Insert.IntoTable("ModelMaster").Row(new
            {
                ModelMasterID = 3,
                ModelName = "4 Door 4 Reader",
                TypeID = 0,
                MaxReaders = 4
            });
            //3
            Insert.IntoTable("ModelMaster").Row(new
            {
                ModelMasterID = 1,
                ModelName = "4 Door 8 Reader",
                TypeID = 0,
                MaxReaders = 8
            });
            //4
            Insert.IntoTable("ModelMaster").Row(new
            {
                ModelMasterID = 4,
                ModelName = "BIOlite",
                TypeID = 0,
                MaxReaders = 2
            });
            //5
            Insert.IntoTable("ModelMaster").Row(new
            {
                ModelMasterID = 10,
                ModelName = "2 Door 4 Reader",
                TypeID = 0,
                MaxReaders = 4
            });



            //6
            Insert.IntoTable("ModelMaster").Row(new
            {
                ModelMasterID = 11,
                ModelName = "smartSINGLE",
                TypeID = 0,
                MaxReaders = 2
            });
            //7
            Insert.IntoTable("ModelMaster").Row(new
            {
                ModelMasterID = 12,
                ModelName = "BIOsmart",
                TypeID = 0,
                MaxReaders = 2
            });
            //8
            Insert.IntoTable("ModelMaster").Row(new
            {
                ModelMasterID = 13,
                ModelName = "Biosmart NG",
                TypeID = 0,
                MaxReaders = 2
            });
            //9
            Insert.IntoTable("ModelMaster").Row(new
            {
                ModelMasterID = 14,
                ModelName = "smartSINGLE NG",
                TypeID = 0,
                MaxReaders = 2
            });
            //10
            Insert.IntoTable("ModelMaster").Row(new
            {
                ModelMasterID = 15,
                ModelName = "BIOsingle",
                TypeID = 0,
                MaxReaders = 1
            });
        }
    }
}

using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{
    [Migration(20190518111000)]
    public class DefaultDB_20190518_111000_ModelType : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("ModelType")
                 .WithColumn("ModelTypeID").AsInt32().PrimaryKey().NotNullable()
                 .WithColumn("ModelNo").AsString(100).NotNullable()
                 .WithColumn("ModelMasterID").AsInt32().NotNullable()
                 .ForeignKey("FK_ModelType_ModelMaster_ModelMasterID", "ModelMaster", "ModelMasterID")
                 .WithColumn("ModelDescription").AsString(1000).Nullable()
                 .WithColumn("NoOfDoors").AsInt32().Nullable()
                 .WithColumn("NoOfReaders").AsInt32().Nullable()
                 .WithColumn("IsBiometric").AsBoolean().NotNullable()
                 .WithColumn("CommunicationSupportType").AsString(100).Nullable()
                 .WithColumn("IsPinProx").AsBoolean().NotNullable()
                 .WithColumn("NoOfUsers").AsInt32().Nullable()
                 .WithColumn("NoOfTranx").AsInt32().Nullable()
                 .WithColumn("Template").AsString(100).Nullable()
                 .WithColumn("MarkDeleted").AsBoolean().NotNullable();                       
        }
    }
}

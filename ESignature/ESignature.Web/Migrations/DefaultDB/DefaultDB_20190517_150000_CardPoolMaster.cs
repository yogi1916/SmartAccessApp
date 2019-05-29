using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{
    [Migration(20190517150000)]
    public class DefaultDB_20190517_150000_CardPoolMaster : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("CardPool")
                 .WithColumn("CardPoolID").AsInt32().PrimaryKey().NotNullable().Identity()
                 .WithColumn("CardNo").AsString(100)
                 .WithColumn("CardTechID").AsInt32()
                 .ForeignKey("FK_MasterCardTechnology_CardPool_CardTechnologyID", "MasterCardTechnology", "CardTechID")
                 .WithColumn("CardCSNNo").AsString(100).Nullable()
                 .WithColumn("CardUseType").AsInt32()
                 .ForeignKey("FK_MasterCardUseType_CardPool_CardUseTypeID", "MasterCardUseType", "CardUseTypeID")
                 .WithColumn("CardType").AsInt32()
                 .ForeignKey("FK_MasterCardType_CardPool_CardTypeID", "MasterCardType", "CardTypeID")
                 .WithColumn("CardStatus").AsInt32()
                 .ForeignKey("FK_MasterCardStatus_CardPool_CardStatusID", "MasterCardStatus", "CardStatusID")
                 .WithColumn("CardUsageStatus").AsInt32()
                 .ForeignKey("FK_MasterCardActivity_CardPool_CardActivityiD", "MasterCardActivity", "CardActivityiD")
                 .WithColumn("CurrentlyAssignedTo").AsString(100).Nullable()
                 .WithColumn("CardExpiryDate").AsDateTime().Nullable()
                 .WithColumn("CardAuthType").AsString(100).Nullable()
                 .WithColumn("NoOfDaysAllowedFromToday").AsInt32().Nullable()
                 .WithColumn("Remark").AsString(100).Nullable()
                 .WithColumn("Description").AsString(100).Nullable()
                 .WithColumn("LastModified").AsDateTime().Nullable()
                 .WithColumn("CreatedDateTime").AsDateTime()
                 .WithColumn("AddedBy").AsInt32().Nullable()
                 .WithColumn("CompanyLocationID").AsInt32()
                 .ForeignKey("FK_CompanyLocations_CardPool_CompanyLocationID", "CompanyLocations", "CompanyLocationID");
        }
    }
}

import React, { Component } from 'react';
import styled from 'styled-components';

const BackGroundColor = styled.div`
    background-color: #70193f;
    margin-color: #70193f;
`;
const CenterContent = styled.div`
    max-width: 1550px;
    margin: auto;
`;
const Fonted = styled.h1`
  font-family: VT323;
`;

class Portfolio extends Component {
    render() {
      return (
        <CenterContent>
        <BackGroundColor className="container-fluid padding">
            <div className="row welcome text-center">
                <div className="col-12">
                    <Fonted><h1 className="display-4 text-white"><u>Projects</u></h1></Fonted>
                    <hr />
                </div>
            </div>
        
            <div className="row">
                <div className="col-lg-4">
                    <img className="card-img-top rounded" src="https://lh3.googleusercontent.com/8dTeN_gDW1MyLkaAwkkjb4reJ7JZBuVBQ00Cpa8bUC3t70beJnJwe2hDp2t5LgWiArOj_zOx6xJcbqYxID3Dr9rX5VEA3gGJOHMcMM_db_EuV2jcMT9NStHlpS8ye33hwNg_tophi3AKvGmN-LVilQvnwtQzegRRtZoDI6z6BQYKM5JLiYP2PIhAmKGafVzrF0HSjanlwAmIoN0GGtdtgDYCL700HOp0dAWGz22-dMS2n-ci5XuJDvSW16xTp432AQ0ePB0WhJkqRSmYgwjC7tWJTMHIfBHpDm6f-hZR1UoybZRlQAXhMB5Alb00RIBywNGAPS27Zrc4Kkz5lWCpK-iHvOwGhgLsKTM_lVZlxzA8TE_ppK8lPQXpAeLYLc-x7TCDgknWxUADGli7nrxMFnnpahhonFttLxveG71GMvu3dmej5dfD11B1IzUIoOXWGC_XxAXhjZPWmmIx_iU4tx5veZrA3ld3jiqFpodb-UbNWGZMQTma-FVfPvMqPZ_1lQeFqlnvpH3SFLTQqCXyVhO1pAj5RTm-R0qdCsMDR3gfT0U9sdkcVsoIzzJtyTblwqzpRqE4IU3JRi9fIoYBXe_0h1KQWDmH4pBEGe4hOewFSjoGrQlZyH2x9qZbfSk=w1252-h827-no" alt="Finance-app-FULLSTACK-WEB-MONGODB"/>
                </div>
                <div className="col-lg-4">
                    <img className="card-img-top rounded" src="https://lh3.googleusercontent.com/8dTeN_gDW1MyLkaAwkkjb4reJ7JZBuVBQ00Cpa8bUC3t70beJnJwe2hDp2t5LgWiArOj_zOx6xJcbqYxID3Dr9rX5VEA3gGJOHMcMM_db_EuV2jcMT9NStHlpS8ye33hwNg_tophi3AKvGmN-LVilQvnwtQzegRRtZoDI6z6BQYKM5JLiYP2PIhAmKGafVzrF0HSjanlwAmIoN0GGtdtgDYCL700HOp0dAWGz22-dMS2n-ci5XuJDvSW16xTp432AQ0ePB0WhJkqRSmYgwjC7tWJTMHIfBHpDm6f-hZR1UoybZRlQAXhMB5Alb00RIBywNGAPS27Zrc4Kkz5lWCpK-iHvOwGhgLsKTM_lVZlxzA8TE_ppK8lPQXpAeLYLc-x7TCDgknWxUADGli7nrxMFnnpahhonFttLxveG71GMvu3dmej5dfD11B1IzUIoOXWGC_XxAXhjZPWmmIx_iU4tx5veZrA3ld3jiqFpodb-UbNWGZMQTma-FVfPvMqPZ_1lQeFqlnvpH3SFLTQqCXyVhO1pAj5RTm-R0qdCsMDR3gfT0U9sdkcVsoIzzJtyTblwqzpRqE4IU3JRi9fIoYBXe_0h1KQWDmH4pBEGe4hOewFSjoGrQlZyH2x9qZbfSk=w1252-h827-no" alt="Finance-app-FULLSTACK-WEB-MONGODB"/>
                </div>
                <div className="col-lg-4">
                    <img className="card-img-top rounded" src="https://lh3.googleusercontent.com/8dTeN_gDW1MyLkaAwkkjb4reJ7JZBuVBQ00Cpa8bUC3t70beJnJwe2hDp2t5LgWiArOj_zOx6xJcbqYxID3Dr9rX5VEA3gGJOHMcMM_db_EuV2jcMT9NStHlpS8ye33hwNg_tophi3AKvGmN-LVilQvnwtQzegRRtZoDI6z6BQYKM5JLiYP2PIhAmKGafVzrF0HSjanlwAmIoN0GGtdtgDYCL700HOp0dAWGz22-dMS2n-ci5XuJDvSW16xTp432AQ0ePB0WhJkqRSmYgwjC7tWJTMHIfBHpDm6f-hZR1UoybZRlQAXhMB5Alb00RIBywNGAPS27Zrc4Kkz5lWCpK-iHvOwGhgLsKTM_lVZlxzA8TE_ppK8lPQXpAeLYLc-x7TCDgknWxUADGli7nrxMFnnpahhonFttLxveG71GMvu3dmej5dfD11B1IzUIoOXWGC_XxAXhjZPWmmIx_iU4tx5veZrA3ld3jiqFpodb-UbNWGZMQTma-FVfPvMqPZ_1lQeFqlnvpH3SFLTQqCXyVhO1pAj5RTm-R0qdCsMDR3gfT0U9sdkcVsoIzzJtyTblwqzpRqE4IU3JRi9fIoYBXe_0h1KQWDmH4pBEGe4hOewFSjoGrQlZyH2x9qZbfSk=w1252-h827-no" alt="Finance-app-FULLSTACK-WEB-MONGODB"/>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4">
                    <img className="card-img-top rounded" src="https://lh3.googleusercontent.com/8dTeN_gDW1MyLkaAwkkjb4reJ7JZBuVBQ00Cpa8bUC3t70beJnJwe2hDp2t5LgWiArOj_zOx6xJcbqYxID3Dr9rX5VEA3gGJOHMcMM_db_EuV2jcMT9NStHlpS8ye33hwNg_tophi3AKvGmN-LVilQvnwtQzegRRtZoDI6z6BQYKM5JLiYP2PIhAmKGafVzrF0HSjanlwAmIoN0GGtdtgDYCL700HOp0dAWGz22-dMS2n-ci5XuJDvSW16xTp432AQ0ePB0WhJkqRSmYgwjC7tWJTMHIfBHpDm6f-hZR1UoybZRlQAXhMB5Alb00RIBywNGAPS27Zrc4Kkz5lWCpK-iHvOwGhgLsKTM_lVZlxzA8TE_ppK8lPQXpAeLYLc-x7TCDgknWxUADGli7nrxMFnnpahhonFttLxveG71GMvu3dmej5dfD11B1IzUIoOXWGC_XxAXhjZPWmmIx_iU4tx5veZrA3ld3jiqFpodb-UbNWGZMQTma-FVfPvMqPZ_1lQeFqlnvpH3SFLTQqCXyVhO1pAj5RTm-R0qdCsMDR3gfT0U9sdkcVsoIzzJtyTblwqzpRqE4IU3JRi9fIoYBXe_0h1KQWDmH4pBEGe4hOewFSjoGrQlZyH2x9qZbfSk=w1252-h827-no" alt="Finance-app-FULLSTACK-WEB-MONGODB"/>
                </div>
                <div className="col-lg-4">
                    <img className="card-img-top rounded" src="https://lh3.googleusercontent.com/8dTeN_gDW1MyLkaAwkkjb4reJ7JZBuVBQ00Cpa8bUC3t70beJnJwe2hDp2t5LgWiArOj_zOx6xJcbqYxID3Dr9rX5VEA3gGJOHMcMM_db_EuV2jcMT9NStHlpS8ye33hwNg_tophi3AKvGmN-LVilQvnwtQzegRRtZoDI6z6BQYKM5JLiYP2PIhAmKGafVzrF0HSjanlwAmIoN0GGtdtgDYCL700HOp0dAWGz22-dMS2n-ci5XuJDvSW16xTp432AQ0ePB0WhJkqRSmYgwjC7tWJTMHIfBHpDm6f-hZR1UoybZRlQAXhMB5Alb00RIBywNGAPS27Zrc4Kkz5lWCpK-iHvOwGhgLsKTM_lVZlxzA8TE_ppK8lPQXpAeLYLc-x7TCDgknWxUADGli7nrxMFnnpahhonFttLxveG71GMvu3dmej5dfD11B1IzUIoOXWGC_XxAXhjZPWmmIx_iU4tx5veZrA3ld3jiqFpodb-UbNWGZMQTma-FVfPvMqPZ_1lQeFqlnvpH3SFLTQqCXyVhO1pAj5RTm-R0qdCsMDR3gfT0U9sdkcVsoIzzJtyTblwqzpRqE4IU3JRi9fIoYBXe_0h1KQWDmH4pBEGe4hOewFSjoGrQlZyH2x9qZbfSk=w1252-h827-no" alt="Finance-app-FULLSTACK-WEB-MONGODB"/>
                </div>
                <div className="col-lg-4">
                    <img className="card-img-top rounded" src="https://lh3.googleusercontent.com/8dTeN_gDW1MyLkaAwkkjb4reJ7JZBuVBQ00Cpa8bUC3t70beJnJwe2hDp2t5LgWiArOj_zOx6xJcbqYxID3Dr9rX5VEA3gGJOHMcMM_db_EuV2jcMT9NStHlpS8ye33hwNg_tophi3AKvGmN-LVilQvnwtQzegRRtZoDI6z6BQYKM5JLiYP2PIhAmKGafVzrF0HSjanlwAmIoN0GGtdtgDYCL700HOp0dAWGz22-dMS2n-ci5XuJDvSW16xTp432AQ0ePB0WhJkqRSmYgwjC7tWJTMHIfBHpDm6f-hZR1UoybZRlQAXhMB5Alb00RIBywNGAPS27Zrc4Kkz5lWCpK-iHvOwGhgLsKTM_lVZlxzA8TE_ppK8lPQXpAeLYLc-x7TCDgknWxUADGli7nrxMFnnpahhonFttLxveG71GMvu3dmej5dfD11B1IzUIoOXWGC_XxAXhjZPWmmIx_iU4tx5veZrA3ld3jiqFpodb-UbNWGZMQTma-FVfPvMqPZ_1lQeFqlnvpH3SFLTQqCXyVhO1pAj5RTm-R0qdCsMDR3gfT0U9sdkcVsoIzzJtyTblwqzpRqE4IU3JRi9fIoYBXe_0h1KQWDmH4pBEGe4hOewFSjoGrQlZyH2x9qZbfSk=w1252-h827-no" alt="Finance-app-FULLSTACK-WEB-MONGODB"/>
                </div>
            </div>
        
        </BackGroundColor>
    </CenterContent>
    );
  }
}

export default Portfolio;

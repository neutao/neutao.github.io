import React from "react";
import JoinHero from "@/components/join/JoinHero";
import RecruitPositionCard from "@/components/join/RecruitPositionCard";
import CurrentOpenings from "@/components/join/CurrentOpenings";
import WhyJoinCAB from "@/components/join/WhyJoinCAB";
import Scholarships from "@/components/join/Scholarships";
import QualificationsAndApply from "@/components/join/QualificationsAndApply";

export default function JoinTheLab() {
  return (
    <div>
      <JoinHero />
      <RecruitPositionCard />
      <CurrentOpenings />
      <WhyJoinCAB />
      <Scholarships />
      <QualificationsAndApply />
    </div>
  );
}
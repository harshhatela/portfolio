import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaBootstrap, FaPython, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiCplusplus, SiC, SiMysql, SiCanva } from "react-icons/si";
import React from 'react';

export const skills = [
  { name: "React", icon: React.createElement(FaReact), color: "#00D8FF", top: "15%", left: "25%", mobileTop: "12%", mobileLeft: "25%" },
  { name: "Python", icon: React.createElement(FaPython), color: "#3776AB", top: "25%", left: "53%", mobileTop: "12%", mobileLeft: "75%" },
  { name: "Figma", icon: React.createElement(FaFigma), color: "#A259FF", top: "22%", left: "72%", mobileTop: "24%", mobileLeft: "15%" },
  { name: "C++", icon: React.createElement(SiCplusplus), color: "#00599C", top: "36%", left: "32%", mobileTop: "24%", mobileLeft: "50%" },
  { name: "Git & GitHub", icon: React.createElement(FaGitAlt), color: "#F0F0F0", top: "36%", left: "83%", mobileTop: "24%", mobileLeft: "85%" }, 
  { name: "C", icon: React.createElement(SiC), color: "#A8B9CC", top: "42%", left: "15%", mobileTop: "38%", mobileLeft: "20%" },
  { name: "Canva", icon: React.createElement(SiCanva), color: "#FF7F50", top: "47%", left: "72%", mobileTop: "38%", mobileLeft: "80%" }, 
  { name: "Bootstrap", icon: React.createElement(FaBootstrap), color: "#7952B3", top: "52%", left: "25%", mobileTop: "62%", mobileLeft: "20%" },
  { name: "SQL", icon: React.createElement(SiMysql), color: "#F29111", top: "57%", left: "78%", mobileTop: "62%", mobileLeft: "80%" },
  { name: "HTML", icon: React.createElement(FaHtml5), color: "#E34F26", top: "65%", left: "22%", mobileTop: "76%", mobileLeft: "15%" },
  { name: "Node.js", icon: React.createElement(FaNodeJs), color: "#339933", top: "65%", left: "55%", mobileTop: "76%", mobileLeft: "50%" },
  { name: "JavaScript", icon: React.createElement(FaJs), color: "#F7DF1E", top: "78%", left: "38%", mobileTop: "76%", mobileLeft: "85%" },
  { name: "CSS", icon: React.createElement(FaCss3Alt), color: "#1572B6", top: "73%", left: "71%", mobileTop: "88%", mobileLeft: "50%" },
];
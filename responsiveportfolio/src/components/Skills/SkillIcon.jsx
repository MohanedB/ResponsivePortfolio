import React from 'react';
import { DiJava } from 'react-icons/di';
import { FiCode } from 'react-icons/fi';
import {
  SiBootstrap, SiCplusplus, SiCsharp, SiCss3, SiDocker, SiFigma,
  SiFirebase, SiGit, SiGithub, SiHtml5, SiJavascript, SiLinux,
  SiMongodb, SiMysql, SiNodedotjs, SiPhp, SiPostman, SiPython,
  SiReact, SiTailwindcss, SiUnity, SiUnrealengine, SiVisualstudio,
  SiVisualstudiocode, SiXcode,
} from 'react-icons/si';

// EJS has no icon in the installed react-icons version. Use its template
// delimiter as a local mark rather than depending on an external image.
const EjsMark = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    <text x="12" y="17" textAnchor="middle" fill="currentColor" fontSize="14" fontFamily="monospace" fontWeight="700">{'<%'}</text>
  </svg>
);

const icons = {
  Unity: [SiUnity, '#F2F3F4'],
  'Unreal Engine': [SiUnrealengine, '#F2F3F4'],
  'C#': [SiCsharp, '#BF95F9'],
  'C++': [SiCplusplus, '#73B9F4'],
  Python: [SiPython, '#FFD343'],
  Git: [SiGit, '#F87561'],
  GitHub: [SiGithub, '#F2F3F4'],
  'Visual Studio': [SiVisualstudio, '#BF95F9'],
  'VS Code': [SiVisualstudiocode, '#52B5F7'],
  Xcode: [SiXcode, '#52B5F7'],
  Linux: [SiLinux, '#FCC624'],
  Figma: [SiFigma, '#CFACFF'],
  'React Js': [SiReact, '#61DAFB'],
  EJS: [EjsMark, '#B4CA65'],
  HTML: [SiHtml5, '#F87561'],
  CSS: [SiCss3, '#52B5F7'],
  JavaScript: [SiJavascript, '#F7DF1E'],
  Bootstrap: [SiBootstrap, '#BF95F9'],
  TailWind: [SiTailwindcss, '#38BDF8'],
  'Node Js': [SiNodedotjs, '#83CD29'],
  MySQL: [SiMysql, '#73B9F4'],
  MongoDB: [SiMongodb, '#69C66A'],
  Firebase: [SiFirebase, '#FFCA28'],
  Java: [DiJava, '#F89B57'],
  PHP: [SiPhp, '#ACB5EF'],
  Docker: [SiDocker, '#52B5F7'],
  Postman: [SiPostman, '#FF936C'],
};

export default function SkillIcon({ name }) {
  const [Icon, color] = icons[name] || [FiCode, '#D8B4FE'];
  return <Icon data-skill-icon={name} size={24} color={color} aria-hidden="true" focusable="false" style={{ flexShrink: 0 }} />;
}

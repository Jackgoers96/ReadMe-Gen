// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === `None`) {
    return ``;
  } else if (license === `MIT`) {
    return `![license: ${license}(https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if (license === "Apache 2.0") {
    return `![License: ${license}](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "GPL 3.0") {
    return `![License: ${license}](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "BSD 3") {
    return `![License: ${license}](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "APACHE 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "BSD 3") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else if (license === "MIT") {
    return `Copyright <YEAR> <COPYRIGHT HOLDER>
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  } else if (license === "APACHE 2.0") {
    return `Copyright [yyyy] [name of copyright owner]
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.`;
  } else if (license === "GPL 3.0") {
    return `<one line to give the program's name and a brief idea of what it does.>
  Copyright (C) <year>  <name of author>
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
  You should have received a copy of the GNU General Public License
  along with this program.  If not, see 
      <https://www.gnu.org/licenses/>.
  <program>  Copyright (C) <year>  <name of author>
  This program comes with ABSOLUTELY NO WARRANTY; for details type 'show w'.
  This is free software, and you are welcome to redistribute it
  under certain conditions; type 'show c' for details.`;
  } else if (license === "BSD 3") {
    return `Copyright <YEAR> <COPYRIGHT HOLDER>
  Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    
  1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    
  2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    
  3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
    
  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  ${renderLicenseBadge(data.license)}
  
  https://github.com/${data.github}/${data.name}
  ## Description 
  ${data.desc}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#Contributions)
  * [Credits](#Credits)
  * [Contact](#Contact)
  
  ## Installation 
  Include the following module to make this work: ${data.modules}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseBadge(data.license)}
  License Link: ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  ## Contributions
  ${data.contributing}
  ## Credits
  ${data.credit}
  ## Contact
  You can find me here:
  * GitHub: https://github.com/${data.github}
  * Linkedin: https://www.linkedin.com/${data.linkedin}
  * E-mail:${data.email}
`;
}

module.exports = generateMarkdown;

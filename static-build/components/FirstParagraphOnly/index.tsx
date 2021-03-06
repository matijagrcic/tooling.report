/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { h, FunctionalComponent } from 'preact';

function extractFirstParagraph(md: string): string {
  return md
    .split('<h1', 3)
    .slice(0, 2)
    .join('<h1');
}

interface Props {
  content: string;
}

const FirstParagraphOnly: FunctionalComponent<Props> = ({ content }) => {
  return (
    <span
      dangerouslySetInnerHTML={{ __html: extractFirstParagraph(content) }}
    ></span>
  );
};

export default FirstParagraphOnly;

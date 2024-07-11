export interface IAtomCHanges {
  old?: string;
  new?: string;
}

export interface IAtomCheckSettings {
  languageStyle: 'formal' | 'informal';
  emphasize: boolean;
}

export interface IAtomMessage {
  role: 'user' | 'assistant';
  content: string;
}
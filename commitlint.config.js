const Configuration = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'rename', 'remove']],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
  },
  prompt: {
    questions: {
      type: {
        description: '코드 변경에 대한 커밋 타입을 입력해주세요:',
        enum: {
          feat: {
            description: '새로운 기능 추가',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: '버그 수정',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: '문서 수정',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description: '코드 포맷팅 등 코드 내용 변경이 아닌 것, 디자인 변경',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description: '리팩토링',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          test: {
            description: '테스트 코드',
            title: 'Tests',
            emoji: '🚨',
          },
          chore: {
            description: '빌드, 패키지 매니저 등 설정 변경',
            title: 'Chores',
            emoji: '♻️',
          },
          rename: {
            description: '파일명 또는 폴더명을 수정한 경우',
            title: 'Renames',
            emoji: '🏷️',
          },
          remove: {
            description: '코드 또는 파일의 삭제가 있는 경우',
            title: 'Removes',
            emoji: '🗑️',
          },
        },
      },
    },
  },
};

export default Configuration;

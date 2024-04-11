const RegExp: Record<string, RegExp> = {
  NONE: /''/g,
  ONLY_TEXT: /[^ㄱ-ㅎ|가-힣|a-z|A-Z|]/g,
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/g,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g,
};

export default RegExp;

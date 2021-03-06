/**
 * List of the TypeScript AST nodes
 * // TODO : remove aliases
 */
export enum SyntaxKind {
    AbstractKeyword = 'AbstractKeyword',
    AmpersandAmpersandToken = 'AmpersandAmpersandToken',
    AmpersandEqualsToken = 'AmpersandEqualsToken',
    AmpersandToken = 'AmpersandToken',
    AnyKeyword = 'AnyKeyword',
    ArrayBindingPattern = 'ArrayBindingPattern',
    ArrayLiteralExpression = 'ArrayLiteralExpression',
    ArrayType = 'ArrayType',
    ArrowFunction = 'ArrowFunction',
    AsExpression = 'AsExpression',
    AsKeyword = 'AsKeyword',
    AssertsKeyword = 'AssertsKeyword',
    AsteriskAsteriskEqualsToken = 'AsteriskAsteriskEqualsToken',
    AsteriskAsteriskToken = 'AsteriskAsteriskToken',
    AsteriskEqualsToken = 'AsteriskEqualsToken',
    AsteriskToken = 'AsteriskToken',
    AsyncKeyword = 'AsyncKeyword',
    AtToken = 'AtToken',
    AwaitExpression = 'AwaitExpression',
    AwaitKeyword = 'AwaitKeyword',
    BacktickToken = 'BacktickToken',
    BarBarToken = 'BarBarToken',
    BarEqualsToken = 'BarEqualsToken',
    BarToken = 'BarToken',
    BigIntKeyword = 'BigIntKeyword',
    BigIntLiteral = 'BigIntLiteral',
    BinaryExpression = 'BinaryExpression',
    BindingElement = 'BindingElement',
    Block = 'Block',
    BooleanKeyword = 'BooleanKeyword',
    BreakKeyword = 'BreakKeyword',
    BreakStatement = 'BreakStatement',
    Bundle = 'Bundle',
    CallExpression = 'CallExpression',
    CallSignature = 'CallSignature',
    CaretEqualsToken = 'CaretEqualsToken',
    CaretToken = 'CaretToken',
    CaseBlock = 'CaseBlock',
    CaseClause = 'CaseClause',
    CaseKeyword = 'CaseKeyword',
    CatchClause = 'CatchClause',
    CatchKeyword = 'CatchKeyword',
    ClassDeclaration = 'ClassDeclaration',
    ClassExpression = 'ClassExpression',
    ClassKeyword = 'ClassKeyword',
    CloseBraceToken = 'CloseBraceToken',
    CloseBracketToken = 'CloseBracketToken',
    CloseParenToken = 'CloseParenToken',
    ColonToken = 'ColonToken',
    CommaListExpression = 'CommaListExpression',
    CommaToken = 'CommaToken',
    ComputedPropertyName = 'ComputedPropertyName',
    ConditionalExpression = 'ConditionalExpression',
    ConditionalType = 'ConditionalType',
    ConflictMarkerTrivia = 'ConflictMarkerTrivia',
    ConstKeyword = 'ConstKeyword',
    Constructor = 'Constructor',
    ConstructorKeyword = 'ConstructorKeyword',
    ConstructorType = 'ConstructorType',
    ConstructSignature = 'ConstructSignature',
    ContinueKeyword = 'ContinueKeyword',
    ContinueStatement = 'ContinueStatement',
    Count = 'Count',
    DebuggerKeyword = 'DebuggerKeyword',
    DebuggerStatement = 'DebuggerStatement',
    DeclareKeyword = 'DeclareKeyword',
    Decorator = 'Decorator',
    DefaultClause = 'DefaultClause',
    DefaultKeyword = 'DefaultKeyword',
    DeleteExpression = 'DeleteExpression',
    DeleteKeyword = 'DeleteKeyword',
    DoKeyword = 'DoKeyword',
    DoStatement = 'DoStatement',
    DotDotDotToken = 'DotDotDotToken',
    DotToken = 'DotToken',
    ElementAccessExpression = 'ElementAccessExpression',
    ElseKeyword = 'ElseKeyword',
    EmptyStatement = 'EmptyStatement',
    EndOfDeclarationMarker = 'EndOfDeclarationMarker',
    EndOfFileToken = 'EndOfFileToken',
    EnumDeclaration = 'EnumDeclaration',
    EnumKeyword = 'EnumKeyword',
    EnumMember = 'EnumMember',
    EqualsEqualsEqualsToken = 'EqualsEqualsEqualsToken',
    EqualsEqualsToken = 'EqualsEqualsToken',
    EqualsGreaterThanToken = 'EqualsGreaterThanToken',
    EqualsToken = 'EqualsToken',
    ExclamationEqualsEqualsToken = 'ExclamationEqualsEqualsToken',
    ExclamationEqualsToken = 'ExclamationEqualsToken',
    ExclamationToken = 'ExclamationToken',
    ExportAssignment = 'ExportAssignment',
    ExportDeclaration = 'ExportDeclaration',
    ExportKeyword = 'ExportKeyword',
    ExportSpecifier = 'ExportSpecifier',
    ExpressionStatement = 'ExpressionStatement',
    ExpressionWithTypeArguments = 'ExpressionWithTypeArguments',
    ExtendsKeyword = 'ExtendsKeyword',
    ExternalModuleReference = 'ExternalModuleReference',
    FalseKeyword = 'FalseKeyword',
    FinallyKeyword = 'FinallyKeyword',
    FirstAssignment = 'FirstAssignment',
    FirstBinaryOperator = 'FirstBinaryOperator',
    FirstCompoundAssignment = 'FirstCompoundAssignment',
    FirstFutureReservedWord = 'FirstFutureReservedWord',
    FirstJSDocNode = 'FirstJSDocNode',
    FirstJSDocTagNode = 'FirstJSDocTagNode',
    FirstKeyword = 'FirstKeyword',
    FirstLiteralToken = 'FirstLiteralToken',
    FirstNode = 'FirstNode',
    FirstPunctuation = 'FirstPunctuation',
    FirstReservedWord = 'FirstReservedWord',
    FirstStatement = 'FirstStatement',
    FirstTemplateToken = 'FirstTemplateToken',
    FirstToken = 'FirstToken',
    FirstTriviaToken = 'FirstTriviaToken',
    FirstTypeNode = 'FirstTypeNode',
    ForInStatement = 'ForInStatement',
    ForKeyword = 'ForKeyword',
    ForOfStatement = 'ForOfStatement',
    ForStatement = 'ForStatement',
    FromKeyword = 'FromKeyword',
    FunctionDeclaration = 'FunctionDeclaration',
    FunctionExpression = 'FunctionExpression',
    FunctionKeyword = 'FunctionKeyword',
    FunctionType = 'FunctionType',
    GetAccessor = 'GetAccessor',
    GetKeyword = 'GetKeyword',
    GlobalKeyword = 'GlobalKeyword',
    GreaterThanEqualsToken = 'GreaterThanEqualsToken',
    GreaterThanGreaterThanEqualsToken = 'GreaterThanGreaterThanEqualsToken',
    GreaterThanGreaterThanGreaterThanEqualsToken = 'GreaterThanGreaterThanGreaterThanEqualsToken',
    GreaterThanGreaterThanGreaterThanToken = 'GreaterThanGreaterThanGreaterThanToken',
    GreaterThanGreaterThanToken = 'GreaterThanGreaterThanToken',
    GreaterThanToken = 'GreaterThanToken',
    HeritageClause = 'HeritageClause',
    Identifier = 'Identifier',
    IfKeyword = 'IfKeyword',
    IfStatement = 'IfStatement',
    ImplementsKeyword = 'ImplementsKeyword',
    ImportClause = 'ImportClause',
    ImportDeclaration = 'ImportDeclaration',
    ImportEqualsDeclaration = 'ImportEqualsDeclaration',
    ImportKeyword = 'ImportKeyword',
    ImportSpecifier = 'ImportSpecifier',
    ImportType = 'ImportType',
    IndexedAccessType = 'IndexedAccessType',
    IndexSignature = 'IndexSignature',
    InferKeyword = 'InferKeyword',
    InferType = 'InferType',
    InKeyword = 'InKeyword',
    InputFiles = 'InputFiles',
    InstanceOfKeyword = 'InstanceOfKeyword',
    InterfaceDeclaration = 'InterfaceDeclaration',
    InterfaceKeyword = 'InterfaceKeyword',
    IntersectionType = 'IntersectionType',
    IsKeyword = 'IsKeyword',
    JSDocAllType = 'JSDocAllType',
    JSDocAugmentsTag = 'JSDocAugmentsTag',
    JSDocAuthorTag = 'JSDocAuthorTag',
    JSDocCallbackTag = 'JSDocCallbackTag',
    JSDocClassTag = 'JSDocClassTag',
    JSDocComment = 'JSDocComment',
    JSDocEnumTag = 'JSDocEnumTag',
    JSDocFunctionType = 'JSDocFunctionType',
    JSDocImplementsTag = 'JSDocImplementsTag',
    JSDocNamepathType = 'JSDocNamepathType',
    JSDocNonNullableType = 'JSDocNonNullableType',
    JSDocNullableType = 'JSDocNullableType',
    JSDocOptionalType = 'JSDocOptionalType',
    JSDocParameterTag = 'JSDocParameterTag',
    JSDocPrivateTag = 'JSDocPrivateTag',
    JSDocPropertyTag = 'JSDocPropertyTag',
    JSDocProtectedTag = 'JSDocProtectedTag',
    JSDocPublicTag = 'JSDocPublicTag',
    JSDocReadonlyTag = 'JSDocReadonlyTag',
    JSDocReturnTag = 'JSDocReturnTag',
    JSDocSignature = 'JSDocSignature',
    JSDocTag = 'JSDocTag',
    JSDocTemplateTag = 'JSDocTemplateTag',
    JSDocThisTag = 'JSDocThisTag',
    JSDocTypedefTag = 'JSDocTypedefTag',
    JSDocTypeExpression = 'JSDocTypeExpression',
    JSDocTypeLiteral = 'JSDocTypeLiteral',
    JSDocTypeTag = 'JSDocTypeTag',
    JSDocUnknownType = 'JSDocUnknownType',
    JSDocVariadicType = 'JSDocVariadicType',
    JsxAttribute = 'JsxAttribute',
    JsxAttributes = 'JsxAttributes',
    JsxClosingElement = 'JsxClosingElement',
    JsxClosingFragment = 'JsxClosingFragment',
    JsxElement = 'JsxElement',
    JsxExpression = 'JsxExpression',
    JsxFragment = 'JsxFragment',
    JsxOpeningElement = 'JsxOpeningElement',
    JsxOpeningFragment = 'JsxOpeningFragment',
    JsxSelfClosingElement = 'JsxSelfClosingElement',
    JsxSpreadAttribute = 'JsxSpreadAttribute',
    JsxText = 'JsxText',
    JsxTextAllWhiteSpaces = 'JsxTextAllWhiteSpaces',
    KeyOfKeyword = 'KeyOfKeyword',
    Keyword = 'Keyword',
    LabeledStatement = 'LabeledStatement',
    LastAssignment = 'LastAssignment',
    LastBinaryOperator = 'LastBinaryOperator',
    LastCompoundAssignment = 'LastCompoundAssignment',
    LastFutureReservedWord = 'LastFutureReservedWord',
    LastJSDocNode = 'LastJSDocNode',
    LastJSDocTagNode = 'LastJSDocTagNode',
    LastKeyword = 'LastKeyword',
    LastLiteralToken = 'LastLiteralToken',
    LastPunctuation = 'LastPunctuation',
    LastReservedWord = 'LastReservedWord',
    LastStatement = 'LastStatement',
    LastTemplateToken = 'LastTemplateToken',
    LastToken = 'LastToken',
    LastTriviaToken = 'LastTriviaToken',
    LastTypeNode = 'LastTypeNode',
    LessThanEqualsToken = 'LessThanEqualsToken',
    LessThanLessThanEqualsToken = 'LessThanLessThanEqualsToken',
    LessThanLessThanToken = 'LessThanLessThanToken',
    LessThanSlashToken = 'LessThanSlashToken',
    LessThanToken = 'LessThanToken',
    LetKeyword = 'LetKeyword',
    Literal = 'Literal',
    LiteralType = 'LiteralType',
    MappedType = 'MappedType',
    MergeDeclarationMarker = 'MergeDeclarationMarker',
    MetaProperty = 'MetaProperty',
    MethodDeclaration = 'MethodDeclaration',
    MethodSignature = 'MethodSignature',
    MinusEqualsToken = 'MinusEqualsToken',
    MinusMinusToken = 'MinusMinusToken',
    MinusToken = 'MinusToken',
    MissingDeclaration = 'MissingDeclaration',
    ModuleBlock = 'ModuleBlock',
    ModuleDeclaration = 'ModuleDeclaration',
    ModuleKeyword = 'ModuleKeyword',
    MultiLineCommentTrivia = 'MultiLineCommentTrivia',
    NamedExports = 'NamedExports',
    NamedImports = 'NamedImports',
    NamespaceExport = 'NamespaceExport',
    NamespaceExportDeclaration = 'NamespaceExportDeclaration',
    NamespaceImport = 'NamespaceImport',
    NamespaceKeyword = 'NamespaceKeyword',
    NeverKeyword = 'NeverKeyword',
    NewExpression = 'NewExpression',
    NewKeyword = 'NewKeyword',
    NewLineTrivia = 'NewLineTrivia',
    NonNullExpression = 'NonNullExpression',
    NoSubstitutionTemplateLiteral = 'NoSubstitutionTemplateLiteral',
    NotEmittedStatement = 'NotEmittedStatement',
    NullKeyword = 'NullKeyword',
    NumberKeyword = 'NumberKeyword',
    NumericLiteral = 'NumericLiteral',
    ObjectBindingPattern = 'ObjectBindingPattern',
    ObjectKeyword = 'ObjectKeyword',
    ObjectLiteralExpression = 'ObjectLiteralExpression',
    OfKeyword = 'OfKeyword',
    OmittedExpression = 'OmittedExpression',
    OpenBraceToken = 'OpenBraceToken',
    OpenBracketToken = 'OpenBracketToken',
    OpenParenToken = 'OpenParenToken',
    OptionalType = 'OptionalType',
    PackageKeyword = 'PackageKeyword',
    Parameter = 'Parameter',
    ParenthesizedExpression = 'ParenthesizedExpression',
    ParenthesizedType = 'ParenthesizedType',
    PartiallyEmittedExpression = 'PartiallyEmittedExpression',
    PercentEqualsToken = 'PercentEqualsToken',
    PercentToken = 'PercentToken',
    PlusEqualsToken = 'PlusEqualsToken',
    PlusPlusToken = 'PlusPlusToken',
    PlusToken = 'PlusToken',
    PostfixUnaryExpression = 'PostfixUnaryExpression',
    PrefixUnaryExpression = 'PrefixUnaryExpression',
    PrivateIdentifier = 'PrivateIdentifier',
    PrivateKeyword = 'PrivateKeyword',
    PropertyAccessExpression = 'PropertyAccessExpression',
    PropertyAssignment = 'PropertyAssignment',
    PropertyDeclaration = 'PropertyDeclaration',
    PropertySignature = 'PropertySignature',
    ProtectedKeyword = 'ProtectedKeyword',
    PublicKeyword = 'PublicKeyword',
    QualifiedName = 'QualifiedName',
    QuestionDotToken = 'QuestionDotToken',
    QuestionQuestionToken = 'QuestionQuestionToken',
    QuestionToken = 'QuestionToken',
    ReadonlyKeyword = 'ReadonlyKeyword',
    RegularExpressionLiteral = 'RegularExpressionLiteral',
    RequireKeyword = 'RequireKeyword',
    RestType = 'RestType',
    ReturnKeyword = 'ReturnKeyword',
    ReturnStatement = 'ReturnStatement',
    SemicolonClassElement = 'SemicolonClassElement',
    SemicolonToken = 'SemicolonToken',
    SetAccessor = 'SetAccessor',
    SetKeyword = 'SetKeyword',
    ShebangTrivia = 'ShebangTrivia',
    ShorthandPropertyAssignment = 'ShorthandPropertyAssignment',
    SingleLineCommentTrivia = 'SingleLineCommentTrivia',
    SlashEqualsToken = 'SlashEqualsToken',
    SlashToken = 'SlashToken',
    SourceFile = 'SourceFile',
    SpreadAssignment = 'SpreadAssignment',
    SpreadElement = 'SpreadElement',
    StaticKeyword = 'StaticKeyword',
    StringKeyword = 'StringKeyword',
    StringLiteral = 'StringLiteral',
    SuperKeyword = 'SuperKeyword',
    SwitchKeyword = 'SwitchKeyword',
    SwitchStatement = 'SwitchStatement',
    SymbolKeyword = 'SymbolKeyword',
    SyntaxList = 'SyntaxList',
    SyntheticExpression = 'SyntheticExpression',
    SyntheticReferenceExpression = 'SyntheticReferenceExpression',
    TaggedTemplateExpression = 'TaggedTemplateExpression',
    TemplateExpression = 'TemplateExpression',
    TemplateHead = 'TemplateHead',
    TemplateMiddle = 'TemplateMiddle',
    TemplateSpan = 'TemplateSpan',
    TemplateTail = 'TemplateTail',
    ThisKeyword = 'ThisKeyword',
    ThisType = 'ThisType',
    ThrowKeyword = 'ThrowKeyword',
    ThrowStatement = 'ThrowStatement',
    TildeToken = 'TildeToken',
    TrueKeyword = 'TrueKeyword',
    TryKeyword = 'TryKeyword',
    TryStatement = 'TryStatement',
    TupleType = 'TupleType',
    TypeAliasDeclaration = 'TypeAliasDeclaration',
    TypeAssertionExpression = 'TypeAssertionExpression',
    TypeKeyword = 'TypeKeyword',
    TypeLiteral = 'TypeLiteral',
    TypeOfExpression = 'TypeOfExpression',
    TypeOfKeyword = 'TypeOfKeyword',
    TypeOperator = 'TypeOperator',
    TypeParameter = 'TypeParameter',
    TypePredicate = 'TypePredicate',
    TypeQuery = 'TypeQuery',
    TypeReference = 'TypeReference',
    UndefinedKeyword = 'UndefinedKeyword',
    UnionType = 'UnionType',
    UniqueKeyword = 'UniqueKeyword',
    Unknown = 'Unknown',
    UnknownKeyword = 'UnknownKeyword',
    UnparsedInternalText = 'UnparsedInternalText',
    UnparsedPrepend = 'UnparsedPrepend',
    UnparsedPrologue = 'UnparsedPrologue',
    UnparsedSource = 'UnparsedSource',
    UnparsedSyntheticReference = 'UnparsedSyntheticReference',
    UnparsedText = 'UnparsedText',
    VariableDeclaration = 'VariableDeclaration',
    VariableDeclarationList = 'VariableDeclarationList',
    VariableStatement = 'VariableStatement',
    VarKeyword = 'VarKeyword',
    VoidExpression = 'VoidExpression',
    VoidKeyword = 'VoidKeyword',
    WhileKeyword = 'WhileKeyword',
    WhileStatement = 'WhileStatement',
    WhitespaceTrivia = 'WhitespaceTrivia',
    WithKeyword = 'WithKeyword',
    WithStatement = 'WithStatement',
    YieldExpression = 'YieldExpression',
    YieldKeyword = 'YieldKeyword'
}

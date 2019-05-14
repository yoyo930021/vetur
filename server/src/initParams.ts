export const params = {
  processId: 13162,
  capabilities: {
    workspace: {
      applyEdit: true,
      workspaceEdit: {
        documentChanges: true,
        resourceOperations: ['create', 'rename', 'delete'],
        failureHandling: 'textOnlyTransactional'
      },
      didChangeConfiguration: {
        dynamicRegistration: true
      },
      didChangeWatchedFiles: {
        dynamicRegistration: true
      },
      symbol: {
        dynamicRegistration: true,
        symbolKind: {
          valueSet: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
        }
      },
      executeCommand: {
        dynamicRegistration: true
      },
      configuration: true,
      workspaceFolders: true
    },
    textDocument: {
      publishDiagnostics: {
        relatedInformation: true,
        tagSupport: true
      },
      synchronization: {
        dynamicRegistration: true,
        willSave: true,
        willSaveWaitUntil: true,
        didSave: true
      },
      completion: {
        dynamicRegistration: true,
        contextSupport: true,
        completionItem: {
          snippetSupport: true,
          commitCharactersSupport: true,
          documentationFormat: ['markdown', 'plaintext'],
          deprecatedSupport: true,
          preselectSupport: true
        },
        completionItemKind: {
          valueSet: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
        }
      },
      hover: {
        dynamicRegistration: true,
        contentFormat: ['markdown', 'plaintext']
      },
      signatureHelp: {
        dynamicRegistration: true,
        signatureInformation: {
          documentationFormat: ['markdown', 'plaintext'],
          parameterInformation: {
            labelOffsetSupport: true
          }
        }
      },
      definition: {
        dynamicRegistration: true,
        linkSupport: true
      },
      references: {
        dynamicRegistration: true
      },
      documentHighlight: {
        dynamicRegistration: true
      },
      documentSymbol: {
        dynamicRegistration: true,
        symbolKind: {
          valueSet: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
        },
        hierarchicalDocumentSymbolSupport: true
      },
      codeAction: {
        dynamicRegistration: true,
        codeActionLiteralSupport: {
          codeActionKind: {
            valueSet: [
              '',
              'quickfix',
              'refactor',
              'refactor.extract',
              'refactor.inline',
              'refactor.rewrite',
              'source',
              'source.organizeImports'
            ]
          }
        }
      },
      codeLens: {
        dynamicRegistration: true
      },
      formatting: {
        dynamicRegistration: true
      },
      rangeFormatting: {
        dynamicRegistration: true
      },
      onTypeFormatting: {
        dynamicRegistration: true
      },
      rename: {
        dynamicRegistration: true,
        prepareSupport: true
      },
      documentLink: {
        dynamicRegistration: true
      },
      typeDefinition: {
        dynamicRegistration: true,
        linkSupport: true
      },
      implementation: {
        dynamicRegistration: true,
        linkSupport: true
      },
      colorProvider: {
        dynamicRegistration: true
      },
      foldingRange: {
        dynamicRegistration: true,
        rangeLimit: 5000,
        lineFoldingOnly: true
      },
      declaration: {
        dynamicRegistration: true,
        linkSupport: true
      }
    }
  },
  initializationOptions: {
    config: {
      editor: {
        fontFamily: 'Input Mono',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 0,
        letterSpacing: 0,
        lineNumbers: 'off',
        renderFinalNewline: true,
        rulers: [],
        wordSeparators: '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?',
        tabSize: 2,
        insertSpaces: true,
        detectIndentation: true,
        roundedSelection: true,
        scrollBeyondLastLine: true,
        scrollBeyondLastColumn: 5,
        smoothScrolling: false,
        minimap: {
          enabled: false,
          side: 'right',
          showSlider: 'mouseover',
          renderCharacters: true,
          maxColumn: 120
        },
        hover: {
          enabled: true,
          delay: 300,
          sticky: true
        },
        find: {
          seedSearchStringFromSelection: true,
          autoFindInSelection: false,
          globalFindClipboard: false,
          addExtraSpaceOnTop: true
        },
        wordWrap: 'off',
        wordWrapColumn: 80,
        wrappingIndent: 'same',
        mouseWheelScrollSensitivity: 1,
        fastScrollSensitivity: 5,
        multiCursorModifier: 'alt',
        multiCursorMergeOverlapping: true,
        quickSuggestions: {
          other: true,
          comments: false,
          strings: false
        },
        quickSuggestionsDelay: 10,
        parameterHints: {
          enabled: true,
          cycle: false
        },
        autoClosingBrackets: 'languageDefined',
        autoClosingQuotes: 'languageDefined',
        autoSurround: 'languageDefined',
        formatOnType: false,
        formatOnPaste: false,
        autoIndent: true,
        suggestOnTriggerCharacters: true,
        acceptSuggestionOnEnter: 'on',
        acceptSuggestionOnCommitCharacter: false,
        snippetSuggestions: 'inline',
        emptySelectionClipboard: true,
        copyWithSyntaxHighlighting: true,
        wordBasedSuggestions: true,
        suggestSelection: 'first',
        suggestFontSize: 0,
        suggestLineHeight: 0,
        tabCompletion: 'off',
        suggest: {
          filterGraceful: true,
          localityBonus: false,
          shareSuggestSelections: false,
          snippetsPreventQuickSuggestions: true,
          showIcons: true,
          maxVisibleSuggestions: 12,
          filteredTypes: {
            keyword: true
          }
        },
        gotoLocation: {
          multiple: 'goto'
        },
        selectionHighlight: true,
        occurrencesHighlight: true,
        overviewRulerLanes: 3,
        overviewRulerBorder: true,
        cursorBlinking: 'blink',
        mouseWheelZoom: false,
        cursorSmoothCaretAnimation: false,
        cursorStyle: 'line',
        cursorWidth: 0,
        fontLigatures: true,
        hideCursorInOverviewRuler: false,
        renderWhitespace: 'none',
        renderControlCharacters: false,
        renderIndentGuides: true,
        highlightActiveIndentGuide: true,
        renderLineHighlight: 'line',
        codeLens: true,
        folding: true,
        foldingStrategy: 'auto',
        showFoldingControls: 'mouseover',
        matchBrackets: true,
        glyphMargin: true,
        useTabStops: false,
        trimAutoWhitespace: false,
        stablePeek: false,
        dragAndDrop: true,
        accessibilitySupport: 'auto',
        showUnused: true,
        links: true,
        colorDecorators: false,
        lightbulb: {
          enabled: true
        },
        maxTokenizationLineLength: 20000,
        codeActionsOnSave: {},
        codeActionsOnSaveTimeout: 750,
        largeFileOptimizations: true,
        defaultFormatter: null,
        tokenColorCustomizations: {},
        formatOnSave: false,
        formatOnSaveTimeout: 750
      },
      diffEditor: {
        renderSideBySide: true,
        ignoreTrimWhitespace: true,
        renderIndicators: true
      },
      http: {
        proxy: '',
        proxyStrictSSL: true,
        proxyAuthorization: null,
        proxySupport: 'override',
        systemCertificates: true
      },
      telemetry: {
        enableTelemetry: true,
        enableCrashReporter: true,
        optout: false
      },
      workbench: {
        list: {
          multiSelectModifier: 'ctrlCmd',
          openMode: 'singleClick',
          horizontalScrolling: false,
          keyboardNavigation: 'highlight',
          automaticKeyboardNavigation: true
        },
        tree: {
          horizontalScrolling: false,
          indent: 8
        },
        editor: {
          showTabs: true,
          highlightModifiedTabs: false,
          labelFormat: 'default',
          tabCloseButton: 'off',
          tabSizing: 'shrink',
          focusRecentEditorAfterClose: true,
          showIcons: true,
          enablePreview: false,
          enablePreviewFromQuickOpen: true,
          closeOnFileDelete: false,
          openPositioning: 'right',
          openSideBySideDirection: 'right',
          closeEmptyGroups: true,
          revealIfOpen: false,
          swipeToNavigate: false,
          restoreViewState: true,
          centeredLayoutAutoResize: true
        },
        commandPalette: {
          history: 50,
          preserveInput: false
        },
        quickOpen: {
          closeOnFocusLost: true,
          preserveInput: false
        },
        settings: {
          openDefaultSettings: false,
          useSplitJSON: true,
          openDefaultKeybindings: false,
          enableNaturalLanguageSearch: true,
          settingsSearchTocBehavior: 'filter',
          editor: 'ui'
        },
        sideBar: {
          location: 'left'
        },
        panel: {
          defaultLocation: 'bottom'
        },
        statusBar: {
          visible: true,
          feedback: {
            visible: false
          }
        },
        activityBar: {
          visible: true
        },
        view: {
          alwaysShowHeaderActions: false
        },
        fontAliasing: 'default',
        enableExperiments: true,
        useExperimentalGridLayout: false,
        startupEditor: 'newUntitledFile',
        colorTheme: 'Nord',
        iconTheme: 'ayu',
        colorCustomizations: {
          '[Nord]': {
            'list.inactiveFocusBackground': '#88c0d099'
          }
        },
        tips: {
          enabled: false
        }
      },
      breadcrumbs: {
        enabled: true,
        filePath: 'on',
        symbolPath: 'on',
        symbolSortOrder: 'position'
      },
      window: {
        title: '${activeEditorShort}${separator}${rootName}',
        openFilesInNewWindow: 'off',
        openFoldersInNewWindow: 'default',
        openWithoutArgumentsInNewWindow: 'off',
        restoreWindows: 'one',
        restoreFullscreen: false,
        zoomLevel: 0,
        newWindowDimensions: 'default',
        closeWhenEmpty: false,
        doubleClickIconToClose: false,
        titleBarStyle: 'custom',
        nativeTabs: false,
        nativeFullScreen: true,
        clickThroughInactive: true
      },
      zenMode: {
        fullScreen: true,
        centerLayout: true,
        hideTabs: true,
        hideStatusBar: true,
        hideActivityBar: true,
        hideLineNumbers: true,
        restore: false
      },
      problems: {
        decorations: {
          enabled: true
        },
        autoReveal: true
      },
      keyboard: {
        dispatch: 'code',
        touchbar: {
          enabled: true
        }
      },
      comments: {
        openPanel: 'openOnSessionStartWithComments'
      },
      remote: {
        extensionKind: {
          'pub.name': 'ui'
        }
      },
      terminal: {
        integrated: {
          shell: {
            linux: '/bin/bash',
            osx: '/bin/zsh',
            windows: 'cmd.exe'
          },
          shellArgs: {
            linux: [],
            osx: ['-l'],
            windows: []
          },
          macOptionIsMeta: false,
          macOptionClickForcesSelection: false,
          copyOnSelection: false,
          drawBoldTextInBrightColors: true,
          fontFamily: '',
          fontSize: 12,
          letterSpacing: 0,
          lineHeight: 1,
          fontWeight: 'normal',
          fontWeightBold: 'bold',
          cursorBlinking: false,
          cursorStyle: 'block',
          scrollback: 1000,
          setLocaleVariables: true,
          rendererType: 'auto',
          rightClickBehavior: 'selectWord',
          cwd: '',
          confirmOnExit: false,
          enableBell: false,
          commandsToSkipShell: [],
          env: {
            osx: {},
            linux: {},
            windows: {}
          },
          showExitAlert: true,
          splitCwd: 'inherited',
          windowsEnableConpty: true,
          enableLatencyMitigation: false,
          experimentalRefreshOnResume: false,
          windowsAllowConptyTasks: false
        },
        explorerKind: 'integrated',
        external: {
          windowsExec: 'C:\\Windows\\System32\\cmd.exe',
          osxExec: 'Terminal.app',
          linuxExec: 'xterm'
        }
      },
      debug: {
        allowBreakpointsEverywhere: false,
        openExplorerOnEnd: false,
        inlineValues: false,
        toolBarLocation: 'floating',
        showInStatusBar: 'onFirstSessionStart',
        internalConsoleOptions: 'openOnFirstSessionStart',
        openDebug: 'openOnSessionStart',
        enableAllHovers: false,
        showSubSessionsInToolBar: false,
        console: {
          fontSize: 12,
          fontFamily: 'default',
          lineHeight: 0
        },
        node: {
          autoAttach: 'on'
        }
      },
      launch: {
        configurations: [
          {
            type: 'chrome',
            request: 'launch',
            name: 'Debug Veturpack',
            url: 'http://localhost:4000',
            webRoot: '${workspaceRoot}',
            sourceMaps: true,
            sourceMapPathOverrides: {
              'webpack:///*': '${webRoot}/src/components/*'
            }
          }
        ],
        compounds: [],
        version: '0.2.0'
      },
      outline: {
        icons: true,
        problems: {
          enabled: true,
          colors: true,
          badges: true
        }
      },
      scm: {
        alwaysShowProviders: false,
        providers: {
          visible: 10
        },
        diffDecorations: 'all',
        diffDecorationsGutterWidth: 3,
        alwaysShowActions: false
      },
      files: {
        exclude: {
          '**/.git': true,
          '**/.svn': true,
          '**/.hg': true,
          '**/CVS': true,
          '**/.DS_Store': true
        },
        associations: {
          '*.pde': 'java',
          '.jsbeautifyrc': 'json'
        },
        encoding: 'utf8',
        autoGuessEncoding: false,
        eol: 'auto',
        enableTrash: true,
        trimTrailingWhitespace: false,
        insertFinalNewline: false,
        trimFinalNewlines: false,
        autoSave: 'afterDelay',
        autoSaveDelay: 1000,
        watcherExclude: {
          '**/.git/objects/**': true,
          '**/.git/subtree-cache/**': true,
          '**/node_modules/**': true
        },
        hotExit: 'off',
        defaultLanguage: '',
        maxMemoryForLargeFilesMB: 4096
      },
      explorer: {
        openEditors: {
          visible: 9
        },
        autoReveal: false,
        enableDragAndDrop: true,
        confirmDragAndDrop: false,
        confirmDelete: false,
        sortOrder: 'default',
        decorations: {
          colors: true,
          badges: true
        }
      },
      search: {
        exclude: {
          '**/node_modules': true,
          '**/bower_components': true
        },
        useRipgrep: true,
        maintainFileSearchCache: false,
        useIgnoreFiles: true,
        useGlobalIgnoreFiles: false,
        quickOpen: {
          includeSymbols: false,
          includeHistory: true
        },
        followSymlinks: true,
        smartCase: false,
        globalFindClipboard: false,
        location: 'sidebar',
        collapseResults: 'auto',
        useReplacePreview: true,
        showLineNumbers: false,
        runInExtensionHost: false,
        usePCRE2: false,
        actionsPosition: 'auto'
      },
      searchRipgrep: {
        enable: false
      },
      extensions: {
        autoUpdate: false,
        autoCheckUpdates: true,
        ignoreRecommendations: true,
        showRecommendationsOnlyOnDemand: true,
        closeExtensionDetailsOnViewChange: false
      },
      '[git-commit]': {
        'editor.rulers': [72]
      },
      '[go]': {
        'editor.insertSpaces': false
      },
      '[json]': {
        'editor.quickSuggestions': {
          strings: true
        }
      },
      '[makefile]': {
        'editor.insertSpaces': false
      },
      '[markdown]': {
        'editor.wordWrap': 'bounded',
        'editor.quickSuggestions': false,
        'editor.fontFamily': 'Input Mono',
        'editor.wordWrapColumn': 100
      },
      '[yaml]': {
        'editor.insertSpaces': true,
        'editor.tabSize': 2,
        'editor.autoIndent': false
      },
      css: {
        experimental: {
          customData: []
        },
        completion: {
          triggerPropertyValueCompletion: true
        },
        validate: true,
        lint: {
          compatibleVendorPrefixes: 'ignore',
          vendorPrefix: 'warning',
          duplicateProperties: 'ignore',
          emptyRules: 'warning',
          importStatement: 'ignore',
          boxModel: 'ignore',
          universalSelector: 'ignore',
          zeroUnits: 'ignore',
          fontFaceProperties: 'warning',
          hexColorLength: 'error',
          argumentsInColorFunction: 'error',
          unknownProperties: 'warning',
          validProperties: [],
          ieHack: 'ignore',
          unknownVendorSpecificProperties: 'ignore',
          propertyIgnoredDueToDisplay: 'warning',
          important: 'ignore',
          float: 'ignore',
          idSelector: 'ignore',
          unknownAtRules: 'warning'
        },
        trace: {
          server: 'off'
        }
      },
      scss: {
        validate: true,
        lint: {
          compatibleVendorPrefixes: 'ignore',
          vendorPrefix: 'warning',
          duplicateProperties: 'ignore',
          emptyRules: 'warning',
          importStatement: 'ignore',
          boxModel: 'ignore',
          universalSelector: 'ignore',
          zeroUnits: 'ignore',
          fontFaceProperties: 'warning',
          hexColorLength: 'error',
          argumentsInColorFunction: 'error',
          unknownProperties: 'warning',
          validProperties: [],
          ieHack: 'ignore',
          unknownVendorSpecificProperties: 'ignore',
          propertyIgnoredDueToDisplay: 'warning',
          important: 'ignore',
          float: 'ignore',
          idSelector: 'ignore'
        }
      },
      less: {
        validate: true,
        lint: {
          compatibleVendorPrefixes: 'ignore',
          vendorPrefix: 'warning',
          duplicateProperties: 'ignore',
          emptyRules: 'warning',
          importStatement: 'ignore',
          boxModel: 'ignore',
          universalSelector: 'ignore',
          zeroUnits: 'ignore',
          fontFaceProperties: 'warning',
          hexColorLength: 'error',
          argumentsInColorFunction: 'error',
          unknownProperties: 'warning',
          validProperties: [],
          ieHack: 'ignore',
          unknownVendorSpecificProperties: 'ignore',
          propertyIgnoredDueToDisplay: 'warning',
          important: 'ignore',
          float: 'ignore',
          idSelector: 'ignore'
        }
      },
      emmet: {
        showExpandedAbbreviation: 'always',
        showAbbreviationSuggestions: true,
        includeLanguages: {},
        variables: {},
        syntaxProfiles: {},
        excludeLanguages: ['markdown'],
        extensionsPath: null,
        triggerExpansionOnTab: false,
        preferences: {},
        showSuggestionsAsSnippets: false,
        optimizeStylesheetParsing: true
      },
      git: {
        enabled: true,
        path: null,
        autoRepositoryDetection: true,
        autorefresh: true,
        autofetch: false,
        autofetchPeriod: 180,
        branchValidationRegex: '',
        branchWhitespaceChar: '-',
        confirmSync: true,
        countBadge: 'all',
        checkoutType: 'all',
        ignoreLegacyWarning: false,
        ignoreMissingGitWarning: false,
        ignoreLimitWarning: false,
        defaultCloneDirectory: null,
        enableSmartCommit: true,
        enableCommitSigning: false,
        confirmEmptyCommits: true,
        decorations: {
          enabled: true
        },
        promptToSaveFilesBeforeCommit: true,
        postCommitCommand: 'none',
        showInlineOpenFileAction: true,
        showPushSuccessNotification: false,
        inputValidation: 'warn',
        inputValidationLength: 72,
        inputValidationSubjectLength: 50,
        detectSubmodules: true,
        detectSubmodulesLimit: 10,
        alwaysShowStagedChangesResourceGroup: false,
        alwaysSignOff: false,
        ignoredRepositories: [],
        scanRepositories: [],
        showProgress: true,
        rebaseWhenSync: false,
        fetchOnPull: false,
        autoStash: false,
        allowForcePush: false,
        useForcePushWithLease: true,
        confirmForcePush: true,
        openDiffOnClick: true
      },
      grunt: {
        autoDetect: 'on'
      },
      gulp: {
        autoDetect: 'on'
      },
      html: {
        experimental: {
          customData: []
        },
        format: {
          enable: true,
          wrapLineLength: 120,
          unformatted: 'wbr',
          contentUnformatted: 'pre,code,textarea',
          indentInnerHtml: false,
          preserveNewLines: true,
          maxPreserveNewLines: null,
          indentHandlebars: false,
          endWithNewline: false,
          extraLiners: 'head, body, /html',
          wrapAttributes: 'auto'
        },
        suggest: {
          html5: true
        },
        validate: {
          scripts: true,
          styles: true
        },
        autoClosingTags: true,
        trace: {
          server: 'off'
        }
      },
      jake: {
        autoDetect: 'on'
      },
      json: {
        schemas: [
          {
            fileMatch: ['/manifest.json'],
            url: 'http://json.schemastore.org/chrome-manifest'
          }
        ],
        format: {
          enable: false
        },
        trace: {
          server: 'off'
        },
        colorDecorators: {
          enable: true
        }
      },
      markdown: {
        styles: [],
        preview: {
          breaks: true,
          linkify: true,
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', 'Ubuntu', 'Droid Sans', sans-serif",
          fontSize: 14,
          lineHeight: 1.6,
          scrollPreviewWithEditor: true,
          scrollPreviewWithEditorSelection: true,
          markEditorSelection: true,
          scrollEditorWithPreview: false,
          doubleClickToSwitchToEditor: true,
          openMarkdownLinks: 'inPreview'
        },
        trace: 'off'
      },
      'merge-conflict': {
        codeLens: {
          enabled: true
        },
        decorators: {
          enabled: true
        },
        autoNavigateNextConflict: {
          enabled: false
        }
      },
      references: {
        preferredLocation: 'peek'
      },
      npm: {
        autoDetect: 'on',
        runSilent: false,
        packageManager: 'npm',
        exclude: '',
        enableScriptExplorer: false,
        scriptExplorerAction: 'open',
        fetchOnlinePackageInfo: true
      },
      php: {
        suggest: {
          basic: true
        },
        validate: {
          enable: true,
          executablePath: null,
          run: 'onSave'
        }
      },
      typescript: {
        tsdk: null,
        disableAutomaticTypeAcquisition: false,
        npm: null,
        check: {
          npmIsInstalled: true
        },
        referencesCodeLens: {
          enabled: false
        },
        implementationsCodeLens: {
          enabled: false
        },
        tsserver: {
          log: 'off',
          pluginPaths: [],
          trace: 'verbose'
        },
        suggest: {
          completeFunctionCalls: false,
          paths: true,
          autoImports: true,
          completeJSDocs: true,
          enabled: true
        },
        reportStyleChecksAsWarnings: true,
        validate: {
          enable: true
        },
        format: {
          enable: true,
          insertSpaceAfterCommaDelimiter: true,
          insertSpaceAfterConstructor: false,
          insertSpaceAfterSemicolonInForStatements: true,
          insertSpaceBeforeAndAfterBinaryOperators: true,
          insertSpaceAfterKeywordsInControlFlowStatements: true,
          insertSpaceAfterFunctionKeywordForAnonymousFunctions: true,
          insertSpaceBeforeFunctionParenthesis: false,
          insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
          insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
          insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
          insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: false,
          insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces: false,
          insertSpaceAfterTypeAssertion: false,
          placeOpenBraceOnNewLineForFunctions: false,
          placeOpenBraceOnNewLineForControlBlocks: false
        },
        tsc: {
          autoDetect: 'on'
        },
        locale: null,
        suggestionActions: {
          enabled: true
        },
        preferences: {
          quoteStyle: 'auto',
          importModuleSpecifier: 'auto',
          renameShorthandProperties: true
        },
        updateImportsOnFileMove: {
          enabled: 'always'
        },
        autoClosingTags: true,
        surveys: {
          enabled: true
        }
      },
      javascript: {
        referencesCodeLens: {
          enabled: false
        },
        suggest: {
          completeFunctionCalls: false,
          names: true,
          paths: true,
          autoImports: true,
          completeJSDocs: true,
          enabled: true
        },
        validate: {
          enable: true
        },
        format: {
          enable: false,
          insertSpaceAfterCommaDelimiter: true,
          insertSpaceAfterConstructor: false,
          insertSpaceAfterSemicolonInForStatements: true,
          insertSpaceBeforeAndAfterBinaryOperators: true,
          insertSpaceAfterKeywordsInControlFlowStatements: true,
          insertSpaceAfterFunctionKeywordForAnonymousFunctions: true,
          insertSpaceBeforeFunctionParenthesis: false,
          insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
          insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
          insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
          insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: false,
          insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces: false,
          placeOpenBraceOnNewLineForFunctions: false,
          placeOpenBraceOnNewLineForControlBlocks: false
        },
        implicitProjectConfig: {
          checkJs: false,
          experimentalDecorators: false
        },
        suggestionActions: {
          enabled: true
        },
        preferences: {
          quoteStyle: 'auto',
          importModuleSpecifier: 'auto',
          renameShorthandProperties: true
        },
        updateImportsOnFileMove: {
          enabled: 'prompt'
        },
        autoClosingTags: true
      },
      emojisense: {
        unicodeCompletionsEnabled: true,
        markupCompletionsEnabled: true,
        showOnColon: true,
        emojiDecoratorsEnabled: true,
        languages: {
          markdown: true,
          plaintext: {
            markupCompletionsEnabled: false,
            emojiDecoratorsEnabled: false
          },
          'git-commit': true
        }
      },
      eslint: {
        enable: false,
        packageManager: 'npm',
        alwaysShowStatus: false,
        nodePath: null,
        options: {},
        trace: {
          server: 'off'
        },
        run: 'onType',
        autoFixOnSave: false,
        workingDirectories: [],
        validate: [
          'javascript',
          'javascriptreact',
          {
            autoFix: true,
            language: 'vue'
          }
        ],
        provideLintTask: false,
        runtime: null,
        codeAction: {
          disableRuleComment: {
            enable: true,
            location: 'newLine'
          },
          showDocumentation: {
            enable: true
          }
        }
      },
      gitlens: {
        blame: {
          avatars: true,
          compact: true,
          dateFormat: null,
          format: '${message|40?} ${agoOrDate|14-}',
          heatmap: {
            enabled: true,
            location: 'right'
          },
          highlight: {
            enabled: true,
            locations: ['gutter', 'line', 'overview']
          },
          ignoreWhitespace: false,
          separateLines: true,
          toggleMode: 'file'
        },
        codeLens: {
          authors: {
            command: 'gitlens.toggleFileBlame',
            enabled: true
          },
          enabled: false,
          includeSingleLineSymbols: false,
          recentChange: {
            command: 'gitlens.showQuickCommitFileDetails',
            enabled: true
          },
          scopes: ['document', 'containers'],
          scopesByLanguage: [
            {
              language: 'azure-pipelines',
              scopes: ['document']
            },
            {
              language: 'css',
              scopes: ['document']
            },
            {
              language: 'html',
              scopes: ['document']
            },
            {
              language: 'json',
              scopes: ['document']
            },
            {
              language: 'jsonc',
              scopes: ['document']
            },
            {
              language: 'less',
              scopes: ['document']
            },
            {
              language: 'postcss',
              scopes: ['document']
            },
            {
              language: 'python',
              symbolScopes: ['!Module']
            },
            {
              language: 'scss',
              scopes: ['document']
            },
            {
              language: 'stylus',
              scopes: ['document']
            },
            {
              language: 'vue',
              scopes: ['document']
            },
            {
              language: 'yaml',
              scopes: ['document']
            }
          ],
          symbolScopes: []
        },
        currentLine: {
          dateFormat: null,
          enabled: false,
          format: '${author}, ${agoOrDate} • ${message}',
          scrollable: true
        },
        debug: false,
        defaultDateFormat: null,
        defaultDateShortFormat: null,
        defaultDateSource: 'authored',
        defaultDateStyle: 'relative',
        defaultGravatarsStyle: 'robohash',
        heatmap: {
          ageThreshold: '90',
          coldColor: '#0a60f6',
          hotColor: '#f66a0a',
          toggleMode: 'file'
        },
        hovers: {
          annotations: {
            changes: true,
            details: true,
            enabled: true,
            over: 'line'
          },
          currentLine: {
            changes: true,
            details: true,
            enabled: true,
            over: 'annotation'
          },
          avatars: true,
          changesDiff: 'line',
          detailsMarkdownFormat:
            '${avatar} &nbsp;__${author}__, ${ago} &nbsp; _(${date})_ \n\n${message}\n\n${commands}',
          enabled: true
        },
        insiders: false,
        keymap: 'chorded',
        liveshare: {
          allowGuestAccess: true
        },
        menus: {
          editor: {
            blame: false,
            clipboard: true,
            compare: true,
            details: false,
            history: false,
            remote: false
          },
          editorGroup: {
            blame: true,
            compare: true
          },
          editorTab: {
            clipboard: true,
            compare: true,
            history: true,
            remote: true
          },
          explorer: {
            clipboard: true,
            compare: true,
            history: true,
            remote: true
          },
          scmGroup: {
            compare: true,
            openClose: true,
            stash: true,
            stashInline: true
          },
          scmItem: {
            clipboard: true,
            compare: true,
            history: true,
            remote: true,
            stash: true
          }
        },
        mode: {
          active: '',
          statusBar: {
            enabled: true,
            alignment: 'right'
          }
        },
        modes: {
          zen: {
            name: 'Zen',
            statusBarItemName: 'Zen',
            description: 'for a zen-like experience, disables many visual features',
            codeLens: false,
            currentLine: false,
            hovers: false,
            statusBar: false
          },
          review: {
            name: 'Review',
            statusBarItemName: 'Reviewing',
            description: 'for reviewing code, enables many visual features',
            codeLens: true,
            currentLine: true,
            hovers: true
          }
        },
        outputLevel: 'errors',
        recentChanges: {
          highlight: {
            locations: ['gutter', 'line', 'overview']
          },
          toggleMode: 'file'
        },
        remotes: null,
        settings: {
          mode: 'simple'
        },
        showWhatsNewAfterUpgrades: false,
        statusBar: {
          alignment: 'right',
          command: 'gitlens.showQuickCommitDetails',
          dateFormat: null,
          enabled: true,
          format: '${author}, ${agoOrDate}',
          reduceFlicker: false
        },
        strings: {
          codeLens: {
            unsavedChanges: {
              recentChangeAndAuthors: 'Unsaved changes (cannot determine recent change or authors)',
              recentChangeOnly: 'Unsaved changes (cannot determine recent change)',
              authorsOnly: 'Unsaved changes (cannot determine authors)'
            }
          }
        },
        views: {
          commitFileFormat: '${file}',
          commitFileDescriptionFormat: '${directory}${  ←  originalPath}',
          commitFormat: '${message}',
          commitDescriptionFormat: '${changes  •  }${author}, ${agoOrDate}',
          compare: {
            avatars: true,
            enabled: true,
            files: {
              compact: true,
              layout: 'auto',
              threshold: 5
            },
            location: 'gitlens'
          },
          defaultItemLimit: 10,
          pageItemLimit: 20,
          fileHistory: {
            avatars: true,
            enabled: true,
            location: 'gitlens'
          },
          lineHistory: {
            avatars: true,
            enabled: true,
            location: 'gitlens'
          },
          repositories: {
            autoRefresh: true,
            autoReveal: true,
            avatars: true,
            branches: {
              layout: 'tree'
            },
            compact: false,
            enabled: true,
            files: {
              compact: true,
              layout: 'auto',
              threshold: 5
            },
            includeWorkingTree: true,
            location: 'gitlens',
            showTrackingBranch: true
          },
          search: {
            avatars: true,
            enabled: true,
            files: {
              compact: true,
              layout: 'auto',
              threshold: 5
            },
            location: 'gitlens'
          },
          showRelativeDateMarkers: true,
          stashFileFormat: '${file}',
          stashFileDescriptionFormat: '${directory}${  ←  originalPath}',
          stashFormat: '${message}',
          stashDescriptionFormat: '${changes  •  }${agoOrDate}',
          statusFileFormat: '${working  }${file}',
          statusFileDescriptionFormat: '${directory}${  ←  originalPath}'
        },
        advanced: {
          abbreviatedShaLength: '7',
          blame: {
            customArguments: null,
            delayAfterEdit: 5000,
            sizeThresholdAfterEdit: 5000
          },
          caching: {
            enabled: true
          },
          fileHistoryFollowsRenames: true,
          maxListItems: 200,
          maxSearchItems: 200,
          messages: {
            suppressCommitHasNoPreviousCommitWarning: false,
            suppressCommitNotFoundWarning: false,
            suppressFileNotUnderSourceControlWarning: false,
            suppressGitDisabledWarning: false,
            suppressGitVersionWarning: false,
            suppressLineUncommittedWarning: false,
            suppressNoRepositoryWarning: false,
            suppressSupportGitLensNotification: false
          },
          quickPick: {
            closeOnFocusOut: true
          },
          repositorySearchDepth: 1,
          similarityThreshold: null,
          telemetry: {
            enabled: true
          }
        }
      },
      materialTheme: {
        accent: 'Teal'
      },
      prettier: {
        disableLanguages: [],
        eslintIntegration: true,
        tslintIntegration: false,
        stylelintIntegration: false,
        requireConfig: false,
        ignorePath: '.prettierignore',
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        parser: 'babylon',
        semi: false,
        useTabs: false,
        proseWrap: 'preserve',
        arrowParens: 'avoid',
        jsxSingleQuote: false,
        htmlWhitespaceSensitivity: 'css',
        endOfLine: 'auto',
        quoteProps: 'as-needed'
      },
      githubPullRequests: {
        telemetry: {
          enabled: true
        },
        hosts: [],
        logLevel: 'info',
        remotes: null,
        includeRemotes: 'default',
        defaultMergeMethod: 'merge',
        showInSCM: false
      },
      github: {
        hosts: []
      },
      tslint: {
        jsEnable: false,
        configFile: '',
        ignoreDefinitionFiles: false,
        exclude: null,
        alwaysShowRuleFailuresAsWarnings: true,
        suppressWhileTypeErrorsPresent: false
      },
      vetur: {
        useWorkspaceDependencies: false,
        completion: {
          autoImport: true,
          useScaffoldSnippets: true,
          tagCasing: 'initial'
        },
        grammar: {
          customBlocks: {
            docs: 'md',
            i18n: 'json'
          }
        },
        validation: {
          template: true,
          style: true,
          script: true
        },
        format: {
          enable: true,
          options: {
            tabSize: 2,
            useTabs: false
          },
          defaultFormatter: {
            html: 'prettier',
            css: 'prettier',
            postcss: 'prettier',
            scss: 'prettier',
            less: 'prettier',
            stylus: 'stylus-supremacy',
            js: 'prettier',
            ts: 'prettier'
          },
          defaultFormatterOptions: {
            'js-beautify-html': {
              wrap_attributes: 'force-expand-multiline'
            },
            prettyhtml: {
              printWidth: 100,
              singleQuote: false,
              wrapAttributes: false,
              sortAttributes: false
            }
          },
          styleInitialIndent: true,
          scriptInitialIndent: true
        },
        trace: {
          server: 'off'
        },
        dev: {
          vlsPath: '',
          vlsPort: -1,
          logLevel: 'INFO'
        },
        experimental: {
          templateInterpolationService: true
        }
      },
      polacode: {
        shadow: 'rgba(0, 0, 0, 0.55) 0px 20px 68px',
        transparentBackground: false,
        backgroundColor: '#f2f2f2',
        target: 'container'
      },
      vim: {
        debug: {
          silent: true,
          loggingLevelForAlert: 'error',
          loggingLevelForConsole: 'error'
        },
        normalModeKeyBindings: [
          {
            before: ['q'],
            commands: ['cursorWordPartRight']
          },
          {
            before: ['Q'],
            commands: ['cursorWordPartLeft']
          }
        ],
        normalModeKeyBindingsNonRecursive: [],
        useCtrlKeys: true,
        leader: '\\',
        searchHighlightColor: '',
        highlightedyank: {
          enable: false,
          color: 'rgba(250, 240, 170, 0.5)',
          duration: 200
        },
        useSystemClipboard: false,
        overrideCopy: true,
        insertModeKeyBindings: [],
        insertModeKeyBindingsNonRecursive: [],
        visualModeKeyBindings: [],
        visualModeKeyBindingsNonRecursive: [],
        textwidth: 80,
        timeout: 1000,
        scroll: 20,
        showcmd: true,
        showmodename: true,
        iskeyword: '',
        ignorecase: true,
        smartcase: true,
        camelCaseMotion: {
          enable: false
        },
        easymotion: false,
        easymotionMarkerBackgroundColor: '',
        easymotionMarkerForegroundColorOneChar: '',
        easymotionMarkerForegroundColorTwoChar: '',
        easymotionMarkerWidthPerChar: 8,
        easymotionMarkerHeight: 14,
        easymotionMarkerFontFamily: 'Consolas',
        easymotionMarkerFontSize: '14',
        easymotionMarkerFontWeight: 'normal',
        easymotionMarkerYOffset: 0,
        easymotionKeys: 'hklyuiopnm,qwertzxcvbasdgjf;',
        easymotionJumpToAnywhereRegex: '\\b[A-Za-z0-9]|[A-Za-z0-9]\\b|_.|#.|[a-z][A-Z]',
        sneak: false,
        sneakUseIgnorecaseAndSmartcase: false,
        surround: true,
        hlsearch: false,
        incsearch: true,
        history: 50,
        autoindent: true,
        startInInsertMode: false,
        handleKeys: {
          '<C-d>': true
        },
        statusBarColorControl: false,
        statusBarColors: {
          normal: '#005f5f',
          insert: '#5f0000',
          visual: '#5f00af',
          visualline: '#005f5f',
          visualblock: '#86592d',
          replace: '#00000'
        },
        visualstar: false,
        changeWordIncludesWhitespace: false,
        foldfix: false,
        mouseSelectionGoesIntoVisualMode: true,
        disableExtension: false,
        enableNeovim: false,
        neovimPath: 'nvim',
        substituteGlobalFlag: false,
        cursorStylePerMode: {
          normal: '',
          insert: '',
          replace: '',
          visual: '',
          visualline: '',
          visualblock: ''
        },
        autoSwitchInputMethod: {
          enable: false,
          defaultIM: '',
          switchIMCmd: '/path/to/im-select {im}',
          obtainIMCmd: '/path/to/im-select'
        },
        whichwrap: '',
        report: 2,
        digraphs: {}
      },
      '[typescript]': {
        'editor.defaultFormatter': 'esbenp.prettier-vscode'
      },
      '[vue]': {
        'editor.defaultFormatter': 'octref.vetur'
      },
      '[html]': {
        'editor.defaultFormatter': 'esbenp.prettier-vscode'
      }
    }
  },
  trace: 'off',
  workspaceFolders: [
    {
      uri: 'file:///Users/octref/Code/mine/v/veturpack',
      name: 'veturpack'
    }
  ]
};

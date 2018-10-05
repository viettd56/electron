gclient_gn_args_file = 'src/build/config/gclient_args.gni'
gclient_gn_args = [
  'build_with_chromium',
  'checkout_android',
  'checkout_android_native_support',
  'checkout_libaom',
  'checkout_nacl',
  'checkout_oculus_sdk'
]

vars = {
  'chromium_version':
    '69.0.3497.106',
  'node_version':
    'cd67eb1d4c8bdb90ac4e6855646662c4bb9f0bfa',

  'pyyaml_version':
    '3.12',

  'chromium_git':
    'https://chromium.googlesource.com',

  'electron_git':
    'https://github.com/electron',

  'yaml_git':
    'https://github.com/yaml',

  'checkout_nacl':
    False,
  'checkout_libaom':
    True,
  'checkout_oculus_sdk':
    False,
  'build_with_chromium':
    True,
  'checkout_android':
    False,
  'checkout_android_native_support':
    False,
}

deps = {
  'src':
    (Var("chromium_git")) + '/chromium/src.git@' + (Var("chromium_version")),
  'src/third_party/electron_node':
    (Var("electron_git")) + '/node.git@' + (Var("node_version")),
  'src/electron/vendor/pyyaml':
    (Var("yaml_git")) + '/pyyaml.git@' + (Var("pyyaml_version")),
}

hooks = [
  {
    'action': [
      'python',
      'src/electron/script/apply-patches',
      '--project-root=.',
      '--commit'
    ],
    'pattern':
      'src/electron',
    'name':
      'patch_chromium'
  },
  {
    'action': [
      'python',
      'src/electron/script/update-external-binaries.py'
    ],
    'pattern':
      'src/electron/script/update-external-binaries.py',
    'name':
      'electron_external_binaries'
  },
  {
    'action': [
      'python',
      '-c',
      'import os; os.chdir("src"); os.chdir("electron"); os.system("npm install")',
    ],
    'pattern': 'src/electron/package.json',
    'name': 'electron_npm_deps'
  },
  {
    'action': [
      'python',
      '-c',
      'import os; os.chdir("src"); os.chdir("electron"); os.system("git submodule update --init --recursive");',
    ],
    'pattern': 'src/electron',
    'name': 'electron_submodules'
  },
  {
    'action': [
      'python',
      '-c',
      'import os; os.chdir("src"); os.chdir("electron"); os.chdir("vendor"); os.chdir("boto"); os.system("python setup.py build");',
    ],
    'pattern': 'src/electron',
    'name': 'setup_boto',
  },
  {
    'action': [
      'python',
      '-c',
      'import os; os.chdir("src"); os.chdir("electron"); os.chdir("vendor"); os.chdir("requests"); os.system("python setup.py build");',
    ],
    'pattern': 'src/electron',
    'name': 'setup_requests',
  }
]

recursedeps = [
  'src',
  'src/libchromiumcontent',
]

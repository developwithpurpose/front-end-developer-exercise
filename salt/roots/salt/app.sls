{% set app_directory = "/exercise" %}

{{ app_directory }}:
  npm:
  - bootstrap
  - user: vagrant

bower --config.interactive=false install:
  cmd:
  - run
  - user: vagrant
  - cwd: {{ app_directory }}

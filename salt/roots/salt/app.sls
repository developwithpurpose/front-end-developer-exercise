{% set app_directory = "/exercise" %}

{{ app_directory }}:
  npm:
  - installed
  - user: vagrant

bower install:
  cmd:
  - run
  - user: vagrant
  - cwd: {{ app_directory }}

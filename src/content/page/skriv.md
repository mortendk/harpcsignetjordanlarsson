---
title: Skriv til the PC
image: ""
components:
  - type: form
    title: ""
    name: hva-skal-pc
    action: /sendes-til-pc
    template: components/form/form.njk
    text: ""
    elements:
      - type: options
        inputtype: Dropdown
        required: false
        title: Hvornår skal PC signe med Jordan Larsson
        option:
          - checked: false
            title: Lige nu !
          - checked: false
            title: NU
          - checked: false
            title: Lige efter min Latte Med havre mælk er blevet kølig
      - type: textarea
        title: "Mit sublime råd til PC er:"
        required: true
      - type: text
        inputtype: text
        required: true
        title: Fra
        placeholder: Fodbold oraklet på Nedre C
      - type: options
        inputtype: Dropdown
        required: false
        option:
          - checked: false
            title: Frederiksberg (D Familie)
          - checked: false
            title: 101% Plastique
          - checked: false
            title: Østerbro (A)
          - checked: false
            title: Lille Nørrebro (B)
          - checked: true
            title: Sektor12 (tm)
          - checked: false
            title: Lille Vesterbro (C)
        title: Hvor i Parken ?
tags:
  - saga11
  - test
url: skriv-til-the-pc
eleventyNavigation:
  parent: main
  title: Skriv
  order: 30
  key: ""
  excerpt: Skriv til pc
  icon: menu/paper-plane.svg
layout: page/page.njk
eleventyExcludeFromCollections: true
---

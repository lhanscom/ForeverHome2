﻿import {enableProdMode} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic'
import {HTTP_PROVIDERS} from '@angular/http';
import {StoryComponent} from './components/story/story.component';

enableProdMode();
bootstrap(StoryComponent);

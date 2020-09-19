#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AppsyncCdkAppStack } from '../lib/appsync-cdk-app-stack';

const app = new cdk.App();
new AppsyncCdkAppStack(app, 'AppsyncCdkAppStack');

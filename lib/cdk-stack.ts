import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CdkStack extends Stack {
  // eslint-disable-next-line no-useless-constructor
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
  }
}

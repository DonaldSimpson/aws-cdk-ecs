import * as cdk from '@aws-cdk/core';

import * as ecs from '@aws-cdk/aws-ecs';
import * as ecsp from '@aws-cdk/aws-ecs-patterns';

export class HelloEcsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new ecsp.ApplicationLoadBalancedFargateService(this, 'MyWebServer', {
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
      },
      publicLoadBalancer: true
    });
  }
}
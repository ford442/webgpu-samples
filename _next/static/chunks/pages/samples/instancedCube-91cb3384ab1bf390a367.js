_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"1uVF":function(n,e,t){"use strict";t.d(e,"e",(function(){return r})),t.d(e,"b",(function(){return a})),t.d(e,"a",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"d",(function(){return s}));var r=40,a=0,o=16,i=32,s=new Float32Array([1,-1,1,1,1,0,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,0,0,1,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,1,1,-1,-1,1,1,0,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,0,0,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,-1,1,1,1,0,1,0,0,-1,1,-1,1,0,1,0,1,1,0,-1,1,1,1,0,1,1,1,1,1,1,1,-1,1,1,1,0,1,0,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,1,-1,1,0,1,0,1,0,0,-1,-1,-1,1,0,0,0,1,1,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,-1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,-1,1,1,0,0,1,1,0,0,-1,-1,1,1,0,0,1,1,0,0,1,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,-1,-1,-1,1,0,0,0,1,0,1,-1,1,-1,1,0,1,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,-1,1,0,1,0,1,0,0])},"8cDV":function(n,e,t){"use strict";t.r(e);var r=t("o0o1"),a=t.n(r),o=t("HaE+"),i=t("IOcx"),s=t("1uVF"),c=t("PpzT"),u=t("SoUo");function l(){return(l=Object(o.a)(a.a.mark((function n(e,t){var r,o,u,l,m,p,g,v,h,x,M,C,b,S,w,y,P,T,V,B,U,E,_,A,L,G;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return G=function(){for(var n=Date.now()/1e3,e=0,t=0,r=0;r<C;r++)for(var a=0;a<b;a++)i.a.rotate(L,V[t],1,i.b.fromValues(Math.sin((r+.5)*n),Math.cos((a+.5)*n),0)),i.a.multiply(L,A,L),i.a.multiply(L,m,L),B.set(L,e),t++,e+=w},n.next=3,navigator.gpu.requestAdapter();case 3:return r=n.sent,n.next=6,r.requestDevice();case 6:return o=n.sent,n.next=9,Object(c.a)();case 9:for(u=n.sent,l=Math.abs(e.width/e.height),m=i.a.create(),i.a.perspective(m,2*Math.PI/5,l,1,100),p=e.getContext("gpupresent"),g=p.configureSwapChain({device:o,format:"bgra8unorm"}),v=o.createBuffer({size:s.d.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(v.getMappedRange()).set(s.d),v.unmap(),h=o.createRenderPipeline({vertexStage:{module:t?o.createShaderModule({code:d.vertex}):o.createShaderModule({code:f.vertex,transform:function(n){return u.compileGLSL(n,"vertex")}}),entryPoint:"main"},fragmentStage:{module:t?o.createShaderModule({code:d.fragment}):o.createShaderModule({code:f.fragment,transform:function(n){return u.compileGLSL(n,"fragment")}}),entryPoint:"main"},primitiveTopology:"triangle-list",depthStencilState:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus-stencil8"},vertexState:{vertexBuffers:[{arrayStride:s.e,stepMode:"vertex",attributes:[{shaderLocation:0,offset:s.b,format:"float4"},{shaderLocation:1,offset:s.a,format:"float4"}]}]},rasterizationState:{cullMode:"back"},colorStates:[{format:"bgra8unorm"}]}),x=o.createTexture({size:{width:e.width,height:e.height,depth:1},format:"depth24plus-stencil8",usage:GPUTextureUsage.OUTPUT_ATTACHMENT}),M={colorAttachments:[{attachment:void 0,loadValue:{r:.5,g:.5,b:.5,a:1}}],depthStencilAttachment:{attachment:x.createView(),depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},y=(S=(C=4)*(b=4))*(4*(w=16)),P=o.createBuffer({size:y,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),T=o.createBindGroup({layout:h.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:P}}]}),V=new Array(S),B=new Float32Array(w*S),4,U=0,E=0;E<C;E++)for(_=0;_<b;_++)V[U]=i.a.create(),i.a.translate(V[U],V[U],i.b.fromValues(4*(E-C/2+.5),4*(_-b/2+.5),0)),U++;return A=i.a.create(),i.a.translate(A,A,i.b.fromValues(0,0,-12)),L=i.a.create(),n.abrupt("return",(function(){G(),o.defaultQueue.writeBuffer(P,0,B.buffer,B.byteOffset,B.byteLength),M.colorAttachments[0].attachment=g.getCurrentTexture().createView();var n=o.createCommandEncoder(),e=n.beginRenderPass(M);e.setPipeline(h),e.setVertexBuffer(0,v),e.setBindGroup(0,T),e.draw(36,S,0,0),e.endPass(),o.defaultQueue.submit([n.finish()])}));case 38:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var f={vertex:"#version 450\n#define MAX_NUM_INSTANCES 16\nlayout(set = 0, binding = 0) uniform Uniforms {\n  mat4 modelViewProjectionMatrix[MAX_NUM_INSTANCES];\n} uniforms;\n\nlayout(location = 0) in vec4 position;\nlayout(location = 1) in vec4 color;\n\nlayout(location = 0) out vec4 fragColor;\n\nvoid main() {\n  gl_Position = uniforms.modelViewProjectionMatrix[gl_InstanceIndex] * position;\n  fragColor = color;\n}",fragment:"#version 450\nlayout(location = 0) in vec4 fragColor;\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n  outColor = fragColor;\n}"},d={vertex:"\n[[block]] struct Uniforms {\n  [[offset(0)]] modelViewProjectionMatrix : [[stride(64)]] array<mat4x4<f32>, 16>;\n};\n\n[[binding(0), set(0)]] var<uniform> uniforms : Uniforms;\n\n[[builtin(instance_idx)]] var<in> instanceIdx : i32;\n[[location(0)]] var<in> position : vec4<f32>;\n[[location(1)]] var<in> color : vec4<f32>;\n\n[[builtin(position)]] var<out> Position : vec4<f32>;\n[[location(0)]] var<out> fragColor : vec4<f32>;\n\n[[stage(vertex)]]\nfn main() -> void {\n  Position = uniforms.modelViewProjectionMatrix[instanceIdx] * position;\n  fragColor = color;\n  return;\n}\n",fragment:"\n[[location(0)]] var<in> fragColor : vec4<f32>;\n[[location(0)]] var<out> outColor : vec4<f32>;\n\n[[stage(fragment)]]\nfn main() -> void {\n  outColor = fragColor;\n  return;\n}\n"};e.default=Object(u.a)({name:"Instanced Cube",description:"This example shows the use of instancing.",slug:"instancedCube",init:function(n,e){return l.apply(this,arguments)},wgslShaders:d,glslShaders:f,source:"import { mat4, vec3 } from 'gl-matrix';\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeColorOffset,\n  cubePositionOffset,\n} from '../../meshes/cube';\nimport glslangModule from '../../glslang';\nimport { makeBasicExample } from '../../components/basicExample';\n\nasync function init(canvas: HTMLCanvasElement, useWGSL: boolean) {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n  const glslang = await glslangModule();\n\n  const aspect = Math.abs(canvas.width / canvas.height);\n  const projectionMatrix = mat4.create();\n  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 100.0);\n\n  const context = canvas.getContext('gpupresent');\n\n  const swapChain = context.configureSwapChain({\n    device,\n    format: 'bgra8unorm',\n  });\n\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const pipeline = device.createRenderPipeline({\n    vertexStage: {\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.vertex,\n          })\n        : device.createShaderModule({\n            code: glslShaders.vertex,\n            transform: (glsl) => glslang.compileGLSL(glsl, 'vertex'),\n          }),\n      entryPoint: 'main',\n    },\n    fragmentStage: {\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.fragment,\n          })\n        : device.createShaderModule({\n            code: glslShaders.fragment,\n            transform: (glsl) => glslang.compileGLSL(glsl, 'fragment'),\n          }),\n      entryPoint: 'main',\n    },\n\n    primitiveTopology: 'triangle-list',\n    depthStencilState: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus-stencil8',\n    },\n    vertexState: {\n      vertexBuffers: [\n        {\n          arrayStride: cubeVertexSize,\n          stepMode: 'vertex',\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float4',\n            },\n            {\n              // color\n              shaderLocation: 1,\n              offset: cubeColorOffset,\n              format: 'float4',\n            },\n          ],\n        },\n      ],\n    },\n\n    rasterizationState: {\n      cullMode: 'back',\n    },\n\n    colorStates: [\n      {\n        format: 'bgra8unorm',\n      },\n    ],\n  });\n\n  const depthTexture = device.createTexture({\n    size: {\n      width: canvas.width,\n      height: canvas.height,\n      depth: 1,\n    },\n    format: 'depth24plus-stencil8',\n    usage: GPUTextureUsage.OUTPUT_ATTACHMENT,\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        // attachment is acquired in render loop.\n        attachment: undefined,\n\n        loadValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n      },\n    ],\n    depthStencilAttachment: {\n      attachment: depthTexture.createView(),\n\n      depthLoadValue: 1.0,\n      depthStoreOp: 'store',\n      stencilLoadValue: 0,\n      stencilStoreOp: 'store',\n    },\n  };\n\n  const xCount = 4;\n  const yCount = 4;\n  const numInstances = xCount * yCount;\n  const matrixFloatCount = 16; // 4x4 matrix\n  const matrixSize = 4 * matrixFloatCount;\n  const uniformBufferSize = numInstances * matrixSize;\n\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const uniformBindGroup = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n        },\n      },\n    ],\n  });\n\n  const modelMatrices = new Array(numInstances);\n  const mvpMatricesData = new Float32Array(matrixFloatCount * numInstances);\n\n  const step = 4.0;\n\n  let m = 0;\n  for (let x = 0; x < xCount; x++) {\n    for (let y = 0; y < yCount; y++) {\n      modelMatrices[m] = mat4.create();\n      mat4.translate(\n        modelMatrices[m],\n        modelMatrices[m],\n        vec3.fromValues(\n          step * (x - xCount / 2 + 0.5),\n          step * (y - yCount / 2 + 0.5),\n          0\n        )\n      );\n      m++;\n    }\n  }\n\n  const viewMatrix = mat4.create();\n  mat4.translate(viewMatrix, viewMatrix, vec3.fromValues(0, 0, -12));\n\n  const tmpMat4 = mat4.create();\n\n  function updateTransformationMatrix() {\n    const now = Date.now() / 1000;\n\n    let m = 0,\n      i = 0;\n    for (let x = 0; x < xCount; x++) {\n      for (let y = 0; y < yCount; y++) {\n        mat4.rotate(\n          tmpMat4,\n          modelMatrices[i],\n          1,\n          vec3.fromValues(\n            Math.sin((x + 0.5) * now),\n            Math.cos((y + 0.5) * now),\n            0\n          )\n        );\n\n        mat4.multiply(tmpMat4, viewMatrix, tmpMat4);\n        mat4.multiply(tmpMat4, projectionMatrix, tmpMat4);\n\n        mvpMatricesData.set(tmpMat4, m);\n\n        i++;\n        m += matrixFloatCount;\n      }\n    }\n  }\n\n  return function frame() {\n    updateTransformationMatrix();\n    device.defaultQueue.writeBuffer(\n      uniformBuffer,\n      0,\n      mvpMatricesData.buffer,\n      mvpMatricesData.byteOffset,\n      mvpMatricesData.byteLength\n    );\n\n    renderPassDescriptor.colorAttachments[0].attachment = swapChain\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.draw(36, numInstances, 0, 0);\n\n    passEncoder.endPass();\n\n    device.defaultQueue.submit([commandEncoder.finish()]);\n  };\n}\n\nconst glslShaders = {\n  vertex: `#version 450\n#define MAX_NUM_INSTANCES 16\nlayout(set = 0, binding = 0) uniform Uniforms {\n  mat4 modelViewProjectionMatrix[MAX_NUM_INSTANCES];\n} uniforms;\n\nlayout(location = 0) in vec4 position;\nlayout(location = 1) in vec4 color;\n\nlayout(location = 0) out vec4 fragColor;\n\nvoid main() {\n  gl_Position = uniforms.modelViewProjectionMatrix[gl_InstanceIndex] * position;\n  fragColor = color;\n}`,\n\n  fragment: `#version 450\nlayout(location = 0) in vec4 fragColor;\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n  outColor = fragColor;\n}`,\n};\n\nconst wgslShaders = {\n  vertex: `\n[[block]] struct Uniforms {\n  [[offset(0)]] modelViewProjectionMatrix : [[stride(64)]] array<mat4x4<f32>, 16>;\n};\n\n[[binding(0), set(0)]] var<uniform> uniforms : Uniforms;\n\n[[builtin(instance_idx)]] var<in> instanceIdx : i32;\n[[location(0)]] var<in> position : vec4<f32>;\n[[location(1)]] var<in> color : vec4<f32>;\n\n[[builtin(position)]] var<out> Position : vec4<f32>;\n[[location(0)]] var<out> fragColor : vec4<f32>;\n\n[[stage(vertex)]]\nfn main() -> void {\n  Position = uniforms.modelViewProjectionMatrix[instanceIdx] * position;\n  fragColor = color;\n  return;\n}\n`,\n  fragment: `\n[[location(0)]] var<in> fragColor : vec4<f32>;\n[[location(0)]] var<out> outColor : vec4<f32>;\n\n[[stage(fragment)]]\nfn main() -> void {\n  outColor = fragColor;\n  return;\n}\n`,\n};\n\nexport default makeBasicExample({\n  name: 'Instanced Cube',\n  description: 'This example shows the use of instancing.',\n  slug: 'instancedCube',\n  init,\n  wgslShaders,\n  glslShaders,\n  source: __SOURCE__,\n});\n"})},hiT4:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samples/instancedCube",function(){return t("8cDV")}])}},[["hiT4",0,1,4,2,3,5]]]);